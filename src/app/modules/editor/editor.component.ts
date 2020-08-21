import { User } from './../../interfaces/user';
import { SqlService } from './../../services/sql.service';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
  users: User[];
  selectedUser: User = { uid: null, displayName: null, email: null, photoURL: null, roles: null };
  constructor(
    private apiService: SqlService,
    public auth: FirebaseService
  ) { }

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
      console.log('Policy deleted, ', user);

      this.apiService.readUsers().subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
      });
    });
  }

}
