import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as faker from 'faker';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
import { SqlService } from './../../services/sql.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  user: Observable<User>;
  constructor(
    private dialog: MatDialog,
    private auth: FirebaseService,
    private apiService: SqlService
  ) {
    const data = {
      std_phone: String(faker.phone.phoneNumberFormat(1)),
      std_email: String(faker.internet.email()),
      std_name: String(faker.name.findName()),
      std_id: faker.random.alphaNumeric(15)
    };
    this.auth.user$.subscribe(result => {
      this.apiService.createUser(result).subscribe();
    });
  }

  ngOnInit() {
    this.dialog.closeAll();
  }
}
