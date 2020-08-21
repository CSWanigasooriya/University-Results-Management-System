import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  user: Observable<User>;
  constructor(
    private auth: FirebaseService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.auth.user$.subscribe(user => {
      if (user.roles.admin) {
        this.router.navigate(['/home/admin/dashboard']);
      }
      else if (user.roles.editor){
        this.router.navigate(['/home/editor/dashboard']);
      }
      else if (user.roles.subscriber){
        this.router.navigate(['/home/subscriber/dashboard']);
      }
    });
  }

  ngOnInit() {
    this.dialog.closeAll();
  }
}
