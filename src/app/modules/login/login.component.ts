import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl(''),
  });

  constructor(
    public fAuth: FirebaseService) {
  }

  onSubmit(): void {
    this.fAuth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  ngOnInit(): void {
  }

}
