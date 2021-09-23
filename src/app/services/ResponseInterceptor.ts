import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ToastController} from '@ionic/angular';
import {injectMocks, Scenarios} from 'data-mocks';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {
    //this.setupMocks();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log('response intercepted');
    console.log(req.url);
    return next.handle(req).pipe(catchError((err => {
      if(err instanceof HttpErrorResponse){
        console.log('error intercepted');
        if(err.status === 401 && localStorage.getItem('token')){
          localStorage.removeItem('token');
          window.location.reload();
        }else if(err.status === 404){
          //window.location.reload();
          this.showErrorToast('Resource doesn\'t exist anymore');
        }
        else if(err.status === 0){
          //this.setupMocks();
          console.log('server dosen\'t respond');
        }
      }
      return of(err);
    })));
  }

  async showErrorToast(message: string) {
    const toastController: ToastController = new ToastController();
    const toast = await toastController.create({
      message,
      //duration: 2000,
      buttons: [
        {
          side: 'end',
          text: 'close'
        }
      ]
    });
    toast.present();
  }

  setupMocks(){
    injectMocks(this.scenarios);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  scenarios: Scenarios = {
    default:[{
      url: /login/,
      method: 'POST',
      response: { token: 'a fake token' },
      responseCode: 200
    },
      {
        url: /Natur/,
        method: 'GET',
        response: [{title: 'Das beste Naturquiz', linkToQuiz: 'play/1/play'}],
        responseCode: 200
      },
      {
        url: /category/,
        method: 'GET',
        response: ['Natur', 'Schmultur'],
        responseCode: 200
      },
      {
        url: /play/,
        method: 'GET',
        response: {
          title: '',
          currentPoints: 0,
          currentQuestion: {
            text: 'Example of a Question text text text text text?',
            answers: [
              {text: 'Answer 1', inCorrect: undefined, nr: 1},
              {text: 'Answer 2', inCorrect: undefined, nr: 2},
              {text: 'Answer 3', inCorrect: undefined, nr: 3},
            ]
          }
        },
        responseCode: 200
      }
    ]
  };
}
