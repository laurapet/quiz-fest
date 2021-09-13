import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private route: ActivatedRoute) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token){
      if(!req.url.includes('localhost:8180/auth/realms/quiz-fest/protocol/openid-connect/token')) {
        const authReq = req.clone({
          setHeaders: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ token
          }
        });
        console.log('Intercept '+ token);
        return next.handle(authReq);
      }
    }else {
      this.router.navigate([`../login`], { relativeTo: this.route });
    }
    return next.handle(req);
  }
}
