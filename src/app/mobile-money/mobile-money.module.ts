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



@NgModule({
  declarations: [DepositComponent, WithdrawComponent, TransferComponent, MobileMoneyComponent],
  imports: [
    CommonModule,
    IonicModule,
    MobileMoneyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MobileMoneyService]
})
export class MobileMoneyModule { }
