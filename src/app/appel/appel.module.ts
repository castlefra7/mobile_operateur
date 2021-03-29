import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppelPageRoutingModule } from './appel-routing.module';

import { AppelPage } from './appel.page';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppelPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AppelPage],
  providers: [ContactService]
})
export class AppelPageModule {}
