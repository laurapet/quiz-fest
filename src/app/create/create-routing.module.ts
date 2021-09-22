import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage } from './create.page';
import {EditquizComponent} from './modals/editquiz/editquiz.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePage,
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
