import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlayQuizComponent} from './tab-play/play-quiz/play-quiz.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './services/interceptors/RequestInterceptor';
import {EditquizComponent} from './tab-create/modals/editquiz/editquiz.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './services/interceptors/AuthInterceptor';
import {ResponseInterceptor} from './services/interceptors/ResponseInterceptor';

@NgModule({
  declarations: [AppComponent, PlayQuizComponent, EditquizComponent, LoginComponent],
  entryComponents: [],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
