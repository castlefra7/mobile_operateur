import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoRoutingModule } from './photo-routing.module';
import { IonicModule } from '@ionic/angular';
import { PhotoComponent } from './photo.component';
import { PhotoService } from './services/photo.service';



@NgModule({
  declarations: [PhotoComponent],
  imports: [
    IonicModule,
    CommonModule,
    PhotoRoutingModule
  ],
  providers: [PhotoService]
})
export class PhotoModule { }
