import { FirebaseService } from './../../services/firebase.service';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  searchValue = null;
  options: [];
  clear;

  constructor(
    private route: ActivatedRoute,
    public auth: FirebaseService
  ) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
  }

  ngAfterViewInit(): void {
    M.AutoInit();
  }

  signOut() {
    this.auth.signOut();
  }
}
