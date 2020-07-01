import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiddlePage } from './middle.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'secondary',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MiddlePage,
    children: [
      {
        path: 'secondary',
        loadChildren: () => import('./children/secondary/secondary.module').then( m => m.SecondaryPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiddlePageRoutingModule {}
