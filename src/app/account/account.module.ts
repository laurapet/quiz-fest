import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {EditquizComponent} from '../editquiz/editquiz.component';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [

    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,

  ],
  declarations: [Tab3Page, EditquizComponent]
})
export class Tab3PageModule {}
