import { FirebaseService } from './../services/firebase.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {
  constructor(
    private auth: FirebaseService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user$.pipe(
      take(1),
      map(user =>
        user && !user.roles.admin && !user.roles.setter && !user.roles.moderator
          || !user.roles.moderator && !user.roles.setter
          ? true : false),
      tap(isSubscriber => {
        if (!isSubscriber) {
          this.router.navigate(['/**']);
        }
      })
    );
  }

}
