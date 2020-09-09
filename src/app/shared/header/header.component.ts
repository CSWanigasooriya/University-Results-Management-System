import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';
import { FirebaseService } from './../../services/firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('drawer', { static: true }) sidenav: SidepanelComponent;
  searchValue = null;
  options: [];
  clear;
  elems;

  constructor(
    private route: ActivatedRoute,
    public auth: FirebaseService
  ) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
  }

  signOut() {
    this.auth.signOut();
  }
}
