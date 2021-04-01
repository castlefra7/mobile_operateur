import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMoneyRoutingModule } from './mobile-money-routing.module';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { IonicModule } from '@ionic/angular';
import { MobileMoneyComponent } from './mobile-money.component';
import { MobileMoneyService } from './services/mobile-money.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomCardModule } from '../custom-card/custom-card.module';
import { AllComponent } from './all/all.component';



@NgModule({
  declarations: [DepositComponent, WithdrawComponent, TransferComponent, MobileMoneyComponent, AllComponent],
  imports: [
    CommonModule,
    IonicModule,
    MobileMoneyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomCardModule
  ],
  providers: [MobileMoneyService],
  exports: [MobileMoneyComponent, AllComponent]
})
export class MobileMoneyModule { }
