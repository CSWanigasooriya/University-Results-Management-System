import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SqlService } from 'src/app/services/sql.service';
import { FirebaseService } from './../../services/firebase.service';
import { User } from '../../interfaces/user';
declare var M;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  hide = true;
  users: any[] = [];
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public fAuth: FirebaseService,
    private apiService: SqlService
  ) {
    this.fAuth.getAllUsers().subscribe(users => {
      users.forEach(user => {
        this.apiService.createUser(user).subscribe();
      });
    });
  }

  async onSubmit() {
    await this.fAuth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  ngAfterViewInit() {
    this.fAuth.signOut();
    M.updateTextFields();
  }

}
