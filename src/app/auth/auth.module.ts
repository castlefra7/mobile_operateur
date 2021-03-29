import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule, AuthRoutingModule, IonicModule, ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
