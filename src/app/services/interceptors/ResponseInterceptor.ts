import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastController} from '@ionic/angular';

/** Pass untouched response through to the next request handler.
 * Or handle Error Message */
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    return next.handle(req).pipe(catchError((err => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401 && localStorage.getItem('token')){
          localStorage.removeItem('token');
          this.showErrorToast('Authorization Failed');
        }else if(err.status === 404){
          this.showErrorToast('Resource doesn\'t exist anymore');
        }
        else if(err.status === 0){
          this.showErrorToast('server dosen\'t respond');
        }
      }
      return of(err);
    })));
  }

  async showErrorToast(message: string) {
    const toastController: ToastController = new ToastController();
    const toast = await toastController.create({
      message,
      buttons: [
        {
          side: 'end',
          text: 'reload',
          handler: () => window.location.reload()
        }
      ]
    });
    toast.present();
  }
}
