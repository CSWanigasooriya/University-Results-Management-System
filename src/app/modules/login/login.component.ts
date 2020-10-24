import { AfterViewInit, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SqlService } from 'src/app/services/sql.service';
import { FirebaseService } from './../../services/firebase.service';
import * as PyApp from '../../../RMSPythonApp/web/app.js';
import { AppConfig, APP_CONFIG } from 'src/app/core/app.config';
import { Router } from '@angular/router';

declare var M;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  hide = true;
  users: any[] = [];
  remember = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    public fAuth: FirebaseService,
    private apiService: SqlService,
    @Inject(APP_CONFIG) public config: AppConfig
  ) {
    this.fAuth.getAllUsers().subscribe(users => {
      users.forEach(user => {
        this.apiService.createUser(user).subscribe();
      });
    });
  }

  async onSubmit() {
    await this.fAuth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
    PyApp.call_py_listener(this.loginForm.get('email').value);
  }

  ngAfterViewInit() {
    this.fAuth.user$.subscribe(user => {
      if (user.roles.admin) {
        this.router.navigate(['/home/admin/dashboard']);
      }
      if(user.roles.moderator || user.roles.setter){
        this.router.navigate(['/home/editor/dashboard']);
      }
      if(!user.roles.setter && !user.roles.moderator && !user.roles.admin){
        this.router.navigate(['/home/subscriber/dashboard']);
      }
    });
    if (this.config.remember) {
      this.fAuth.setPersistence(true);
    } else {
      this.fAuth.setPersistence(false);
    }
    M.updateTextFields();
  }

}
