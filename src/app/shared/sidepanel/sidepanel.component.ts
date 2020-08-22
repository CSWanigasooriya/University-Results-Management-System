import { FirebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
declare var M: any;
@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent {
  user;
  constructor(public auth: FirebaseService) {
    this.auth.user$.subscribe(user => {
      M.AutoInit();
      this.user = user;
    });
  }
}
