import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiddlePage } from './middle.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'secondary-splitpane',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MiddlePage,
    children: [
      {
        path: 'secondary-splitpane',
        loadChildren: () => import('./children/secondary-splitpane/secondary-splitpane.module').then( m => m.SecondarySplitpanePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiddlePageRoutingModule {}
