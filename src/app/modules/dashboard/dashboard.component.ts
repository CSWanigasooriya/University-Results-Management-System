import { FirebaseService } from './../../services/firebase.service';
import { User } from './../../interfaces/user';
import { SqlService } from './../../services/sql.service';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  users: User[];
  user;
  selectedUser: User = { uid: null, displayName: null, email: null, photoURL: null };
  constructor(
    private apiService: SqlService,
    public auth: FirebaseService
  ) {
    this.auth.user$.subscribe(user => this.user = user);
  }

  ngAfterViewInit(): void {

    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users);
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
      console.log('Policy deleted, ', user);

      this.apiService.readUsers().subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
      });
    });
  }

}
