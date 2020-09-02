import { User } from './../interfaces/user';
import { take, map, tap } from 'rxjs/operators';
import { FirebaseService } from './../services/firebase.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: User;
  roles;
  constructor(
    private auth: FirebaseService,
    private router: Router
  ) {
    this.auth.user$.subscribe(user => this.user = user);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.user.roles.admin) {
      return this.router.navigate(['/home/admin/dashboard']);
    }
    else if (this.user.roles.editor) {
      return this.router.navigate(['/home/editor/dashboard']);
    }
    else if (this.user.roles.subscriber) {
      this.router.navigate(['/home/subscriber/dashboard']);
    }
  }

}
