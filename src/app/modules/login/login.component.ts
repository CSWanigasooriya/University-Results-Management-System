import { FirebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public fAuth: FirebaseService) {
  }

  onSubmit(): void {
    this.fAuth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }



}
