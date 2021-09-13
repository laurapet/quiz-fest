import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  acquireToken(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    console.log(username);
    this.http.post('http://localhost:8180/auth/realms/quiz-fest/protocol/openid-connect/token', body.toString(), {headers:
        new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', 'Basic ' + btoa('quiz-fest:57f24317-2f8b-4056-9308-a779c03c4291'))
    }).subscribe(res =>{
      console.log(res['access_token']);

    });
  }
}
