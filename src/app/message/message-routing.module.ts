import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMessagesComponent } from './list-messages/list-messages.component';

import { MessagePage } from './message.page';

const routes: Routes = [
  {
    path: '',
    component: MessagePage
  },
  {
    path: 'list',
    component: ListMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagePageRoutingModule {}
