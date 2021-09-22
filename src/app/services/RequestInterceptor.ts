import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if(!req.url.includes('http://')) {
      const authReq = req.clone({
        setHeaders: {
          'content-type': 'application/json'
        },
        url: environment.baseUrlQuizFest + req.url
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
