import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import {
  Plugins,
  PushNotification,
  PushNotificationToken
} from '@capacitor/core';
import { AlertController } from '@ionic/angular';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private afDB: AngularFireDatabase, private alert: AlertController) {

  }

  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
// constructor(private splashScreen: SplashScreen) {}
   ngOnInit(): void {
    //  this.presentAlert();
    // this.splashScreen.hide();
    // this.afDB.list('people').valueChanges().subscribe(tab => {
    //   console.log(JSON.stringify(tab));
    // });
    
    // //  this.afDB.list('people/').push({
    // //   name: 'jakob'
    // // });

    // PushNotifications.requestPermission().then(result => {
    //   if (result.granted) {
    //     // Register with Apple / Google to receive push via APNS/FCM
    //     PushNotifications.register();
    //   } else {
    //     // Show some error
    //     console.log("Error registering push notification");
    //   }
    // });

    // PushNotifications.addListener(
    //   'registration',
    //   (token: PushNotificationToken) => {
    //     console.log( token.value);
    //     alert('Push registration success, token: ' + token.value);
    //   },
    // );

    // PushNotifications.addListener('registrationError', (error: any) => {
    //   alert('Error on registration: ' + JSON.stringify(error));
    // });

    //   PushNotifications.addListener(
    //     'pushNotificationReceived',
    //     (notification: PushNotification) => {
    //       console.log (JSON.stringify(notification))
    //       alert('Push received: ' + JSON.stringify(notification));
    //     },
    //   );

    // PushNotifications.addListener(
    //   'pushNotificationActionPerformed',
    //   (notification: PushNotificationActionPerformed) => {
    //     alert('Push action performed: ' + JSON.stringify(notification));
    //   },
    // );
  }
}
