import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreatePage } from './create.page';
import {EditquestionComponent} from './modals/editquestion/editquestion.component';
import { Tab3PageRoutingModule } from './create-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {PlayQuizComponent} from '../tab-play/play-quiz/play-quiz.component';

@NgModule({
    imports: [

        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: CreatePage}]),
        Tab3PageRoutingModule,
        ReactiveFormsModule,

    ],
  declarations: [CreatePage, EditquestionComponent]
})
export class Tab3PageModule {}