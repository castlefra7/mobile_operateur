import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoneyCreditOfferComponent } from './money-credit-offer/money-credit-offer.component';



const routes: Routes = [
  {
    path: '',
    component: MoneyCreditOfferComponent
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
export class MoneyCreditOfferRoutingModule { }
