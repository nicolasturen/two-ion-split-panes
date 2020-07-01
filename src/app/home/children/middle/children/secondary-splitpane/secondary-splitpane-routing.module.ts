import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondarySplitpanePage } from './secondary-splitpane.page';

const routes: Routes = [
  {
    path: '',
    component: SecondarySplitpanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondarySplitpanePageRoutingModule {}
