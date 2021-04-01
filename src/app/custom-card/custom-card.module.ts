import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CustomCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CustomCardComponent]
})
export class CustomCardModule { }
