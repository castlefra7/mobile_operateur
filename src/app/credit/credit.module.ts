import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchatComponent } from './components/achat/achat.component';
import { CreditComponent } from './credit.component';
import { CreditRoutingModule } from './credit-routing.module';
import { TransferComponent } from './components/transfer/transfer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AchatComponent, CreditComponent, TransferComponent],
  imports: [
    CommonModule,
    CreditRoutingModule,
    IonicModule
  ]
})
export class CreditModule { }
