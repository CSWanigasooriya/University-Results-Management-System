import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
import { SqlService } from './../../services/sql.service';
declare var M;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[];
  message;
  conflicts: any[] = [];
  resolved: any[] = [];
  incomplete: any[] = [];
  submissions: any[] = [];
  final;
  selectedUser: User = {
    uid: null, displayName: null, email: null, photoURL: null, lastUpdate: null, roles: { subscriber: true }
  };

  constructor(
    private apiService: SqlService,
    private auth: FirebaseService,
    private dialog: MatDialog
  ) { }

  async ngOnInit() {
    M.AutoInit();
    await this.apiService.readResult().subscribe(res => {
      res.forEach(element => {
        if (element.es_1 > element.es_2 && element.es_2.length !== 0) {
          this.conflicts.push(element);
        }
        if (element.es_1 < element.es_2 && element.es_1.length !== 0) {
          this.conflicts.push(element);
        }
        if (element.es_1 === element.es_2 && element.es_1.length !== 0 && element.es_2.length !== 0) {
          const data = {
            st_id: element.st_id,
            mod_id: element.mod_id,
            cas: element.cas,
            es_1: element.es_1,
            es_2: element.es_2,
            final: element.es_1,
            mark: element.mark,
            lastUpdate: null
          };
          this.resolved.push(element);
          this.apiService.updateResult(data).subscribe();
        }
        if (element.es_2 === '' || element.es_1 === '') {
          this.incomplete.push(element);
        }
      });
    });
    await this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    await this.apiService.readLecResult().subscribe(lecres => {
      lecres.forEach(element => {
        this.submissions.push(element);
      });
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  deleteUser(id) {
    this.apiService.deleteUser(id).subscribe((user: User) => {
      console.log('Deleted', user);
    });
  }

  sendMessage() {
    this.auth.user$.subscribe(user => {
      const data = {
        uid: user.uid,
        name: user.displayName,
        notice: this.message
      };
      this.auth.sendMessage(data);
    });
    alert('Message has been sent');
  }

  finalize(clash) {
    const data = {
      st_id: clash.st_id,
      mod_id: clash.mod_id,
      cas: clash.cas,
      es_1: String(this.final),
      es_2: String(this.final),
      final: String(this.final),
      mark: clash.mark,
      lastUpdate: null
    };
    this.resolved.push(data);
    this.apiService.updateResult(data).subscribe(res => {
      this.openDialog('Result Updated', `The confilict has been resolved. ${data.st_id} final marks are updated.`);
      const index = this.conflicts.indexOf(clash);
      if (index > -1) {
        this.conflicts.splice(index, 1);
      }
    });
  }

  clearSubmissions() {
    this.submissions.forEach(val => {
      this.apiService.deleteLecResult(val.lec_id).subscribe(() => {
        alert('Submissions cleared, records will be updated next time you refresh');
      });
    });
  }

  openDialog(title: string, content?: string) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModalComponent, {
      position: {
        top: '10vh'
      },
      width: '600px',
      disableClose: true,
      data: {
        title,
        content,
        cancelText: '',
        confirmText: 'OK'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
