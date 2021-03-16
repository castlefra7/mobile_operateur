import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './components/deposit/deposit.component';
import { MobileMoneyComponent } from './mobile-money.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';


const routes: Routes = [
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: 'withdraw',
    component: WithdrawComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
  },
  {
    path: '',
    component: MobileMoneyComponent
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
export class MobileMoneyRoutingModule { }
