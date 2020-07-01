import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'middle',
        loadChildren: () => import('./children/middle/middle.module').then( m => m.MiddlePageModule)
      },
      {
        path: 'welcome',
        loadChildren: () => import('./children/welcome/welcome.module').then( m => m.WelcomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
