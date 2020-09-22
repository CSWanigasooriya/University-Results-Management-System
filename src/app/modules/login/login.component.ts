import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from './../../services/firebase.service';
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
    public fAuth: FirebaseService
  ) {  }

  async onSubmit() {
    await this.fAuth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  ngAfterViewInit() {
    this.fAuth.signOut();
    M.updateTextFields();
  }

}
