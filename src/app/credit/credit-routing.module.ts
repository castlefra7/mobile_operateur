import { NgModule } from '@angular/core';
import { CreditComponent } from './credit.component';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './components/achat/achat.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { BuyfromMobileComponent } from './components/buyfrom-mobile/buyfrom-mobile.component';


const routes: Routes = [
  {
    path: 'achat',
    component: AchatComponent
  },
  {
    path: 'buyMobile',
    component: BuyfromMobileComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
  },
  {
    path: '',
    component: CreditComponent
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
export class CreditRoutingModule { }
