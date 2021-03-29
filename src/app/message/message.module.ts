import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { ListMessagesComponent } from './list-messages/list-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { MessagePage } from './message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  declarations: [ListMessagesComponent, MessagePage]
})
export class MessagePageModule {}
