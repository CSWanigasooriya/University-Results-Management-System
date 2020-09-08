import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private setter = new Subject<any>();
  private moderator = new Subject<any>();
  constructor() { }

  setSetter(message: string) {
    this.setter.next(message);
  }

  clearSetter() {
    this.setter.next();
  }

  getSetter(): Observable<any> {
    return this.setter.asObservable();
  }

  setModerator(message: string) {
    this.moderator.next(message);
  }

  clearModerator() {
    this.moderator.next();
  }

  getModerator(): Observable<any> {
    return this.moderator.asObservable();
  }
}
