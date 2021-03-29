import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchatComponent } from './components/achat/achat.component';
import { CreditComponent } from './credit.component';
import { CreditRoutingModule } from './credit-routing.module';
import { TransferComponent } from './components/transfer/transfer.component';
import { IonicModule } from '@ionic/angular';
import { CreditService } from './services/credit.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AchatComponent, CreditComponent, TransferComponent],
  imports: [
    CommonModule,
    CreditRoutingModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CreditService]
})
export class CreditModule { }
