import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'quizzes',
        loadChildren: () => import('../quizzes/quizzes.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('../create/create.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/quizzes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/quizzes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
