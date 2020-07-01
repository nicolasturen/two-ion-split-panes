import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondarySplitpanePageRoutingModule } from './secondary-splitpane-routing.module';

import { SecondarySplitpanePage } from './secondary-splitpane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondarySplitpanePageRoutingModule
  ],
  declarations: [SecondarySplitpanePage]
})
export class SecondarySplitpanePageModule {}
