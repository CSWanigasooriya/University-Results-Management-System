import { Component, TemplateRef, ViewChild } from '@angular/core';
import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
declare var M;
declare var $;

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent{
  @ViewChild('admin') admin: TemplateRef<any>;
  @ViewChild('editor') editor: TemplateRef<any>;
  @ViewChild('subscriber') subscriber: TemplateRef<any>;

  user: User;
  liveTemplate: TemplateRef<any>;

  constructor(public auth: FirebaseService) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      if (this.user?.roles.admin) {
        this.liveTemplate = this.admin;
        M.AutoInit();
        $(document).ready(() => {
          $('.sidenav').sidenav();
        });
      } else if (this.user?.roles.setter || this.user?.roles.moderator) {
        this.liveTemplate = this.editor;
        M.AutoInit();
        $(document).ready(() => {
          $('.sidenav').sidenav();
        });
      } else {
        this.liveTemplate = this.subscriber;
        M.AutoInit();
        $(document).ready(() => {
          $('.sidenav').sidenav();
        });
      }
    });
  }
}
