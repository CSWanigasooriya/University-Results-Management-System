import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  myControl = new FormControl();
  values: string[] = ['Account', 'Dashboard'];
  filteredOptions: Observable<string[]>;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: FirebaseService
  ) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
  }

  async ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  signOut() {
    this.auth.signOut();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.values.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  redirectTo(option) {
    this.auth.user$.subscribe(user => {
      switch (option) {
        case 'Account':
          if (user.roles.admin) {
            this.router.navigate([`/home/admin/settings`]);
          }
          if (user.roles.setter || user.roles.moderator) {
            this.router.navigate([`/home/editor/settings`]);
          }
          if (!user.roles.setter && !user.roles.moderator && !user.roles.admin) {
            this.router.navigate([`/home/subscriber/settings`]);
          }
          break;
        case 'Dashboard':
          if (user.roles.admin) {
            this.router.navigate([`/home/admin/dashboard`]);
          }
          if (user.roles.setter || user.roles.moderator) {
            this.router.navigate([`/home/editor/dashboard`]);
          }
          if (!user.roles.admin && !user.roles.setter && !user.roles.moderator) {
            this.router.navigate([`/home/subscriber/dashboard`]);
          }
      }
    }
    );
  }
}
