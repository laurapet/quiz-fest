import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreatePage } from './create.page';
import {EditquestionComponent} from './modals/editquestion/editquestion.component';
import { Tab3PageRoutingModule } from './create-routing.module';

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
