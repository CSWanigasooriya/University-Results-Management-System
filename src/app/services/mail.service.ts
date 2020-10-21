import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MailService {
  http: HttpClient;
  myEmail = 'chamathwanigasooriya@gmail.com';
  endpoint: string;
  constructor(http: HttpClient) {
    this.endpoint = `${environment.PHP_API_SERVER}/api/mail.php`;
    this.http = http;
  }

  sendEmail(name, message) {
    const postVars = {
      email: this.myEmail,
      name,
      reciever: 'chamathwanigasooriya@gmail.com',
      message
    };

    // You may also want to check the response. But again, let's keep it simple.
    this.http.post(this.endpoint, postVars)
      .subscribe(
        response => alert('Email Sent!'),
        response => alert('Error!')
      );
  }

}
