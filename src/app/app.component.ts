import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import { Plugins } from '@capacitor/core';
import {
  LocalNotification,
  LocalNotificationActionPerformed,
  Plugins,
  PushNotification,
  PushNotificationToken
} from '@capacitor/core';
import { AlertController } from '@ionic/angular';

const { PushNotifications, LocalNotifications } = Plugins;




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  main_color: String = "#1B264F";

  constructor(private alert: AlertController, private router: Router) {

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

  async simpleNotif() {
    var dt = new Date();
    dt.setSeconds(dt.getSeconds() + 2);
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: "Title",
          body: "Bonjour ca va ve nareo",
          id: 1,
          schedule: { at: dt },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }

  ngOnInit(): void {
    LocalNotifications.addListener('localNotificationActionPerformed', (notificationAction: LocalNotificationActionPerformed) => {
      this.router.navigate(['/messages']);
    })
    // this.simpleNotif();

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
