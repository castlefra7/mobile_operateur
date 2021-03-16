import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMoneyRoutingModule } from './mobile-money-routing.module';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';



@NgModule({
  declarations: [DepositComponent, WithdrawComponent, TransferComponent],
  imports: [
    CommonModule,
    MobileMoneyRoutingModule
  ]
})
export class MobileMoneyModule { }
