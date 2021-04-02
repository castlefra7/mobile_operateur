import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMessagesRoutingModule } from './list-messages-routing.module';
import { ListMessagesComponent } from './list-messages.component';
import { IonicModule } from '@ionic/angular';
import { AuthModule } from '../auth/auth.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListMessagesComponent],
  imports: [
    CommonModule,
    IonicModule,
    ListMessagesRoutingModule,
    AuthModule,
    HttpClientModule
  ]
})
export class ListMessagesModule { }
