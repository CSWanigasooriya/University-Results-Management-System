import { AfterViewInit, Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SqlService } from 'src/app/services/sql.service';
import { FirebaseService } from './../../services/firebase.service';
import { AppConfig, APP_CONFIG } from 'src/app/core/app.config';
import { Router } from '@angular/router';
// import * as PyApp from '../../../RMSPythonApp/web/app.js';
declare var M;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  users: any[] = [];
  remember = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private zone: NgZone,
    public fAuth: FirebaseService,
    private apiService: SqlService,
    @Inject(APP_CONFIG) public config: AppConfig
  ) {
    // this.fAuth.getAllUsers().subscribe(users => {
    //   users.forEach(user => {
    //     this.apiService.readUsers().subscribe(curr => {
    //       curr.forEach(dbuser => {
    //         if (user && dbuser.uid !== user.uid) {
    //           // this.apiService.createUser(user).subscribe();
    //         }
    //       });
    //     });
    //   });
    // });
  }

  onSubmit() {
    this.fAuth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
    // PyApp.call_py_listener(`${this.loginForm.get('email').value}`);
    if (this.config.remember) {
      this.fAuth.setPersistence(true);
    } else {
      this.fAuth.setPersistence(false);
    }
  }

  ngOnInit() {
    this.fAuth.user$.subscribe(user => {
      this.zone.run(() => {
        if (user && user.roles.admin) {
          this.router.navigate(['/home/admin/dashboard']);
        }
        if (user && (user.roles.moderator || user.roles.setter)) {
          this.router.navigate(['/home/editor/dashboard']);
        }
        if (user && !user.roles.setter && !user.roles.moderator && !user.roles.admin) {
          this.router.navigate(['/home/subscriber/dashboard']);
        }
      });
    });
    M.updateTextFields();
  }

}
