import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferRoutingModule } from './offer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OfferComponent } from './offer.component';
import { OfferService } from './services/offer.service';
import { BuyOfferComponent } from './components/buy-offer/buy-offer.component';
import { BuyOfferMobileComponent } from './components/buy-offer-mobile/buy-offer-mobile.component';



@NgModule({
  declarations: [OfferComponent, BuyOfferComponent, BuyOfferMobileComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  providers: [OfferService]
})
export class OfferModule { }
