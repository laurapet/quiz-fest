import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  registerRedirect = 'http://localhost:8180/auth/realms/quiz-fest/protocol/openid-connect/registrations?client_id=quiz-app&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=91a06228-6b37-4069-8839-c333a8fedc21&response_mode=fragment&response_type=code&scope=openid&nonce=3344722e-a7ce-489d-8d96-27ac7978de5b';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  acquireToken(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    this.http.post('http://localhost:8180/auth/realms/quiz-fest/protocol/openid-connect/token', body.toString(), {headers:
        new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', 'Basic ' + btoa('quiz-fest:57f24317-2f8b-4056-9308-a779c03c4291'))
    }).subscribe(res =>{

      const token = res['access_token'];
      //console.log(token);
      if(token){
        localStorage.setItem('username', username);
        localStorage.setItem('token', res['access_token']);
        this.redirectHome();
      }
    });
  }

  redirectHome(){
    this.router.navigate(['../'], { relativeTo: this.route }).then(()=>{
      window.location.reload();
    });
  }
}
