import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent implements OnInit {
  user;
  constructor(public auth: FirebaseService) {
    this.auth.user$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

}
