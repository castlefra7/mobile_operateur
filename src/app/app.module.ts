import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MobileMoneyModule } from './mobile-money/mobile-money.module';
import { MessagePageModule } from './message/message.module';
import { CreditModule } from './credit/credit.module';
import { AppelPageModule } from './appel/appel.module';
import { AppsPageModule } from './apps/apps.module';
import { InfoconsoPageModule } from './infoconso/infoconso.module';
import { PhotoModule } from './photo/photo.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthModule } from './auth/auth.module';


// export const firebaseConfig = {
//   apiKey: "AIzaSyAQNh1grr366oN7RC-BzhUELDMI-XnYnX0",
//   authDomain: "learn-jean.firebaseapp.com",
//   projectId: "learn-jean",
//   storageBucket: "learn-jean.appspot.com",
//   messagingSenderId: "1000413520391",
//   appId: "1:1000413520391:web:87531f67f8d54db67fc0a2",
//   measurementId: "G-GZGXFW9739"
// };

export const firebaseConfig = {
  apiKey: "AIzaSyAQNh1grr366oN7RC-BzhUELDMI-XnYnX0",
  authDomain: "learn-jean.firebaseapp.com",
  databaseURL: "https://learn-jean-default-rtdb.firebaseio.com",
  projectId: "learn-jean",
  storageBucket: "learn-jean.appspot.com",
  messagingSenderId: "1000413520391",
  appId: "1:1000413520391:web:f8584d7092f1a6f67fc0a2",
  measurementId: "G-NV32TQM2RK"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule, IonicModule.forRoot(), AppRoutingModule,
    MobileMoneyModule, MessagePageModule, CreditModule, AppelPageModule, AppsPageModule, InfoconsoPageModule, PhotoModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule, AuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
