import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppsPageRoutingModule } from './apps-routing.module';

import { AppsPage } from './apps.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppsPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AppsPage]
})
export class AppsPageModule {}
