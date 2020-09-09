import { SqlService } from './../../services/sql.service';
import { FirebaseService } from './../../services/firebase.service';
import { Component, AfterViewInit, NgZone } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare var M;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public fAuth: FirebaseService,
    private apiService: SqlService,
  ) { }

  async onSubmit() {
    await this.fAuth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  ngAfterViewInit() {
    M.updateTextFields();
  }

}
