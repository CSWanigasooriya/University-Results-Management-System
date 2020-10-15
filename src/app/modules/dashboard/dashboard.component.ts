import { Component, OnInit } from '@angular/core';
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
  clickedItem: any;
  final;
  selectedUser: User = {
    uid: null, displayName: null, email: null, photoURL: null, lastUpdate: null, roles: { subscriber: true }
  };

  constructor(
    private apiService: SqlService,
    private auth: FirebaseService
  ) { }

  ngOnInit() {
    M.AutoInit();
    this.apiService.readResult().subscribe(res => {
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
          this.apiService.updateResult(data).subscribe();
        }
      });
    });
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
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

  showReview(clash) {
    this.clickedItem = clash;
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

    this.apiService.updateResult(data).subscribe(res => {
      alert('Result Updated!');
      const index = this.conflicts.indexOf(clash);
      if (index > -1) {
        this.conflicts.splice(index, 1);
      }
    });
  }
}
