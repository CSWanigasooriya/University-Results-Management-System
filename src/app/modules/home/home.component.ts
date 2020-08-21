import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showFiller = false;
  user: Observable<User>;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.dialog.closeAll();
  }
}
