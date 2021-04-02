import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoconsoPageRoutingModule } from './infoconso-routing.module';

import { InfoconsoPage } from './infoconso.page';
import { HttpClientModule } from '@angular/common/http';
import { InfoconsoService } from './services/infoconso.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoconsoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [InfoconsoPage],
  providers: [InfoconsoService]
})
export class InfoconsoPageModule {}
