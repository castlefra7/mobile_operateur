import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyCreditOfferComponent } from './money-credit-offer/money-credit-offer.component';
import { IonicModule } from '@ionic/angular';
import { MoneyCreditOfferRoutingModule } from './money-credit-offer-routing.module';
import { CustomCardModule } from '../custom-card/custom-card.module';



@NgModule({
  declarations: [MoneyCreditOfferComponent],
  imports: [
    CommonModule,
    IonicModule,
    MoneyCreditOfferRoutingModule,
    CustomCardModule
  ]
})
export class MoneyCreditOfferModule { }
