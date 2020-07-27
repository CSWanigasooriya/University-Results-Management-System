import { FirebaseService } from './../../services/firebase.service';
import { Component, AfterViewInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  searchValue = null;
  clear;

  constructor(
    public auth: FirebaseService
  ) {
  }

  ngAfterViewInit(): void {
    M.AutoInit();
  }

  signOut() {
    this.auth.signOut();
  }
}
