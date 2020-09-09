import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/user';
import { SqlService } from './../../services/sql.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[];
  message;

  selectedUser: User = {
    uid: null, displayName: null, email: null, photoURL: null, lastUpdate: null, roles: { subscriber: true }
  };

  constructor(
    private apiService: SqlService,
    private auth: FirebaseService
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

  sendMessage() {
    this.auth.sendMessage(this.message);
  }
}
