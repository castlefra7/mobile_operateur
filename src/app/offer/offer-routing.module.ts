import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyOfferMobileComponent } from './components/buy-offer-mobile/buy-offer-mobile.component';
import { BuyOfferComponent } from './components/buy-offer/buy-offer.component';
import { OfferComponent } from './offer.component';

const routes: Routes = [
  {
    path: '',
    component: OfferComponent
  },
  {
    path: 'buy',
    component: BuyOfferComponent
  },
  {
    path: 'buyMobile',
    component: BuyOfferMobileComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferRoutingModule {}
