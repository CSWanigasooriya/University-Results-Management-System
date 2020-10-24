import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  ) {  }

  ngOnInit() {
    this.auth.user$.subscribe(result => {
      this.apiService.readLecturer().subscribe(lec => {
        lec.forEach(element => {
          if (element && element.lec_email === result.email) {
            const info = {
              lec_id: String(result.uid),
              dept_id: String(element.dept_id),
              lec_name: String(element.lec_name),
              lec_email: String(element.lec_email)
            };
            this.apiService.createLecturer(info).subscribe();
          }
        });
      });
      this.apiService.createUser(result).subscribe();
    });
    this.dialog.closeAll();
  }
}
