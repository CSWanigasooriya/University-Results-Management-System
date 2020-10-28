import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
import { MailService } from './../../services/mail.service';
import { SqlService } from './../../services/sql.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  users: User[];
  user: any;
  notice: any[] = [];
  groupedByModule: any[] = [];
  myModules: any[] = [];
  results: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  panelOpenState = true;
  public subscribeForm: FormGroup;
  public email: FormControl;
  private unsubscribe = new Subject<void>();
  selectedUser: User = {
    uid: null, displayName: null, email: null, photoURL: null, roles: { subscriber: true }, lastUpdate: null
  };
  constructor(
    public apiService: SqlService,
    public mail: MailService,
    public auth: FirebaseService
  ) {
    this.auth.getMessage().subscribe(note => {
      note.forEach(element => {
        if (element.uid) {
          this.notice.push(element);
        }
      });
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.apiService.readModule().subscribe(res => {
      this.auth.user$.subscribe(user => {
        for (let i = 0; i < res.length; i++) {
          if (user &&(res[i].lec_id === user.uid)) {
            this.groupedByModule.push(this.groupModule(res.filter(x => x.lec_id === user.uid)));
            this.panelOpenState = false;
            break;
          } else {
            this.panelOpenState = true;
          }
        }
      });
    });
  }

  getMostGrades() {
    const obj = {
      value: Math.max.apply(null, this.results),
      index: this.rangeFromIndex(this.results.indexOf(Math.max.apply(null, this.results)))
    };
    return obj;
  }

  rangeFromIndex(index) {
    switch (index) {
      case 11: return '0 < 30';
        break;
      case 10: return '30 < 35';
        break;
      case 9: return '30 < 40';
        break;
      case 8: return '40 < 45';
        break;
      case 7: return '45 < 50';
        break;
      case 6: return '50 < 55';
        break;
      case 5: return '55 < 60';
        break;
      case 4: return '60 < 65';
        break;
      case 3: return '65 < 70';
        break;
      case 2: return '70 < 75';
        break;
      case 1: return '75 < 80';
        break;
      case 0: return '80 < 100';
        break;
    }
  }


  groupModule(myArray: any[]) {
    const groupKey = 0;
    const groups = myArray.reduce((r, o) => {
      const m = o.mod_id;
      this.apiService.readResult().subscribe(res => {
        res.forEach(elem => {
          if (elem.mod_id === m) {
            this.getGrade(elem.final);
          }
        });
      });
      (r[m]) ? r[m].data.push(o) : r[m] = { group: m, data: [o] };
      return r;
    }, {});

    const result = Object.keys(groups).map((k) => groups[k]);
    return result;

  }

  getGrade(mark) {
    const finalMark = mark;
    if (finalMark <= 100 && finalMark >= 85) {
      this.results[0]++;
    } else if (finalMark < 84 && finalMark >= 75) {
      this.results[1]++;
    } else if (finalMark < 75 && finalMark >= 70) {
      this.results[2]++;
    } else if (finalMark < 70 && finalMark >= 65) {
      this.results[3]++;
    } else if (finalMark < 65 && finalMark >= 60) {
      this.results[4]++;
    } else if (finalMark < 60 && finalMark >= 55) {
      this.results[5]++;
    } else if (finalMark < 55 && finalMark >= 50) {
      this.results[6]++;
    } else if (finalMark < 50 && finalMark >= 45) {
      this.results[7]++;
    } else if (finalMark < 45 && finalMark >= 40) {
      this.results[8]++;
    } else if (finalMark < 40 && finalMark >= 35) {
      this.results[9]++;
    } else if (finalMark < 35 && finalMark >= 30) {
      this.results[10]++;
    } else if (finalMark < 30 && finalMark >= 0) {
      this.results[11]++;
    }
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.subscribeForm = new FormGroup({
      email: this.email
    });
  }

  createOrUpdateUser(form) {
    if (this.selectedUser && this.selectedUser.uid) {
      form.value.id = this.selectedUser.uid;
      this.apiService.updateUser(form.value).subscribe((user: User) => {
        console.log('User updated', user);
      });
    }
    else {
      this.apiService.createUser(form.value).subscribe((user: User) => {
        console.log('User created, ', user);
      });
    }

  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  deleteUser(id) {
    this.apiService.deleteUser(id).subscribe((user: User) => {
      console.log('User deleted, ', user);

      this.apiService.readUsers().subscribe((users: User[]) => {
        this.users = users;
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
