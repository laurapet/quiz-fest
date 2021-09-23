import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayPage } from './play.page';

import { PlayRoutingModule } from './play-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlayRoutingModule
  ],
  declarations: [PlayPage]
})
export class PlayModule {}
