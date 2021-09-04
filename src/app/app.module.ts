import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlayQuizComponent} from './play-quiz/play-quiz.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent, PlayQuizComponent],
  entryComponents: [],
  imports: [BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot([{path: 'play-quiz', component: PlayQuizComponent}])],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
