import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log('response intercepted');
    return next.handle(req).pipe(catchError((err => {
      if(err instanceof HttpErrorResponse){
        console.log('error intercepted');
        if(err.status === 401 && localStorage.getItem('token')){
          localStorage.removeItem('token');
          window.location.reload();
        } else if(err.status === 0){
          console.log('server dosen\'t respond');
        }
      }
      return of(err);
    })));
  }
}
