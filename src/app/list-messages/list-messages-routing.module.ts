import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMessagesComponent } from './list-messages.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: ListMessagesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
  exports: [RouterModule]
})
export class ListMessagesRoutingModule { }
