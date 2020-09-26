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
          if (result && element.lec_email === result.email) {
            const info = {
              lec_id: result.uid,
              dept_id: element.dept_id,
              lec_name: element.lec_name,
              lec_email: element.lec_email
            };
            this.apiService.updateLecturer(info).subscribe();
          }
        });
      });
      this.apiService.createUser(result).subscribe();
    });
    this.dialog.closeAll();
  }
}
