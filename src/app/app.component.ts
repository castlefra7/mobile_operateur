import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { AngularFireDatabase } from '@angular/fire/database';

// import {
//   Plugins,
//   PushNotification
// } from '@capacitor/core';

// const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // constructor(private afDB: AngularFireDatabase) { }
constructor(private splashScreen: SplashScreen) {}
  ngOnInit(): void {
    this.splashScreen.hide();

    // console.log('List customers\n');
    // this.afDB.list('customers').valueChanges().subscribe(tab => {
    //   console.log(tab);
    // });
    // console.log('=======================');

    // PushNotifications.requestPermission().then(result => {
    //   if (result.granted) {
    //     // Register with Apple / Google to receive push via APNS/FCM
    //     PushNotifications.register();
    //   } else {
    //     // Show some error
    //   }
    // });

    // PushNotifications.addListener(
    //   'registration',
    //   (token: PushNotificationToken) => {
    //     alert('Push registration success, token: ' + token.value);
    //   },
    // );

    // PushNotifications.addListener('registrationError', (error: any) => {
    //   alert('Error on registration: ' + JSON.stringify(error));
    // });

    // PushNotifications.addListener(
    //   'pushNotificationReceived',
    //   (notification: PushNotification) => {
    //     alert('Push received: ' + JSON.stringify(notification));
    //   },
    // );

    // PushNotifications.addListener(
    //   'pushNotificationActionPerformed',
    //   (notification: PushNotificationActionPerformed) => {
    //     alert('Push action performed: ' + JSON.stringify(notification));
    //   },
    // );
  }
}
