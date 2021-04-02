import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfferService } from '../../services/offer.service';


import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-buy-offer',
  templateUrl: './buy-offer.component.html',
  styleUrls: ['./buy-offer.component.scss'],
})
export class BuyOfferComponent implements OnInit {
  myForm: FormGroup;
  main_color: String = "#1B264F";

  constructor(private offer: OfferService, private fb: FormBuilder, private alert: AlertController) {
    var dt = new Date();
    this.myForm = fb.group({
      code: [''],
      date: [dt.toISOString()]
    })

  }

  ngOnInit() { }
  
  
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

    this.offer.buyOffer(this.myForm.value).then(response => {
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
      this.myForm.get("code").setValue('');
    }).catch(err => {
      this.presentAlert("Vérifier votre connexion");
    })
  }
}
