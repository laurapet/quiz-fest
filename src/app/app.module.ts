import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlayQuizComponent} from './play-quiz/play-quiz.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './services/RequestInterceptor';
import {EditquizComponent} from './editquiz/editquiz.component';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './services/AuthInterceptor';

@NgModule({
  declarations: [AppComponent, PlayQuizComponent, LoginComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot([{path: 'play-quiz', component: PlayQuizComponent},
      {path: 'editquiz', component: EditquizComponent}])],
      providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
