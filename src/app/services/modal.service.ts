import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private title = new BehaviorSubject('');
  private content = new BehaviorSubject('');
  currentTitle = this.title.asObservable();
  currentContent = this.content.asObservable();

  constructor() { }
  changeTitle(message: string) {
    this.title.next(message);
  }
  changeContent(message: string) {
    this.content.next(message);
  }
}
