import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MobileMoneyService } from '../../services/mobile-money.service';

import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  myForm: FormGroup;
  main_color: String = "#1B264F";

  constructor(private moneyService: MobileMoneyService, private fb: FormBuilder, private alert: AlertController) {
    var dt = new Date();
    this.myForm = fb.group({
      amount: [],
      date: [dt.toISOString()],
      password: ['']
    })
  }

  ngOnInit() {}

  async presentAlert(message = "Une erreur inconnue s'est produite") {
    const alert = await this.alert.create({
      cssClass: 'erreur',
      header: 'Erreur',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentNotif(body = "Message inconnue") {
    var dt = new Date();
    dt.setSeconds(dt.getSeconds() + 2);
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: environment.op,
          body,
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

  onSubmit() {
    this.moneyService.withdraw(this.myForm.value).then(response => {
      response.subscribe(
        _arr => {
          if (_arr.status?.code == 200) {
            var dt = new Date();
            dt.setSeconds(dt.getSeconds() + 5);
            var str = "";
            _arr.data?.forEach(d => {
              str += d.message; 
            })
            this.presentNotif(str);
          } else {
            this.presentAlert(_arr.status?.message);
          }
        }
      );
      this.myForm.get("amount").setValue(0);
    }).catch(err => {
      this.presentAlert("Vérifier votre connexion");
    })
  }

}
