import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent implements OnInit {
  constructor(public auth: FirebaseService) {
  }

  ngOnInit(): void {
  }

}
