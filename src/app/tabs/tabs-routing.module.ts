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
        loadChildren: () => import('../tab-account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'play',
        loadChildren: () => import('../tab-play/play.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('../tab-create/create.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/play',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/play',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
