import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoconsoPage } from './infoconso.page';

const routes: Routes = [
  {
    path: '',
    component: InfoconsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoconsoPageRoutingModule {}
