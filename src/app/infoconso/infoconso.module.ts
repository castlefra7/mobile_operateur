import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoconsoPageRoutingModule } from './infoconso-routing.module';

import { InfoconsoPage } from './infoconso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoconsoPageRoutingModule
  ],
  declarations: [InfoconsoPage]
})
export class InfoconsoPageModule {}
