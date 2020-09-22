import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';
import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer', { static: true }) sidenav: SidepanelComponent;
  searchValue = null;
  options: [];
  clear;
  elems;
  user: User;

  constructor(
    private route: ActivatedRoute,
    public auth: FirebaseService
  ) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
  }

  async ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  signOut() {
    this.auth.signOut();
  }
}
