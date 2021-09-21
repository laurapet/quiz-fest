import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {EditquizComponent} from '../editquiz/editquiz.component';
import {EditquestionComponent} from '../editquestion/editquestion.component';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {PlayQuizComponent} from '../play-quiz/play-quiz.component';

@NgModule({
    imports: [

        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: Tab3Page}]),
        Tab3PageRoutingModule,
        ReactiveFormsModule,

    ],
  declarations: [Tab3Page, EditquestionComponent]
})
export class Tab3PageModule {}
