import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

/** Pass request through to the next request handler with appropriate Url. */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if(!req.url.includes('http://')) {
      const cloneReq = req.clone({
        setHeaders: {
          'content-type': 'application/json'
        },
        url: environment.baseUrlQuizFest + req.url
      });
      return next.handle(cloneReq);
    }
    return next.handle(req);
  }
}
