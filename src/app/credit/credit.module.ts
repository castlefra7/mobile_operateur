import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchatComponent } from './components/achat/achat.component';
import { CreditComponent } from './credit.component';
import { CreditRoutingModule } from './credit-routing.module';
import { TransferComponent } from './components/transfer/transfer.component';



@NgModule({
  declarations: [AchatComponent, CreditComponent, TransferComponent],
  imports: [
    CommonModule,
    CreditRoutingModule
  ]
})
export class CreditModule { }
