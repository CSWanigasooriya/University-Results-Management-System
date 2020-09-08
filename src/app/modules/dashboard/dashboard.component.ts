import { User } from './../../interfaces/user';
import { SqlService } from './../../services/sql.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[];

  selectedUser: User = {
    uid: null, displayName: null, email: null, photoURL: null, logInTime: null, logOutTime: null, roles: { subscriber: true }
  };

  constructor(
    private apiService: SqlService
  ) { }

  ngOnInit() {
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
}
