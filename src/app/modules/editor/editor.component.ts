import { AfterViewInit, Component } from '@angular/core';
import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
import { SqlService } from './../../services/sql.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
  users: User[];
  notice;
  selectedUser: User = {
    uid: null, displayName: null, email: null, photoURL: null, roles: { subscriber: true }, lastUpdate: null
  };
  constructor(
    private apiService: SqlService,
    public auth: FirebaseService
  ) {
    this.auth.getMessage().subscribe(note => {
      this.notice = note;
    });
  }

  ngAfterViewInit(): void {
    // this.apiService.readUsers().subscribe((users: User[]) => {
    //   this.users = users;
    //   console.log(this.users);
    // });

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

}
