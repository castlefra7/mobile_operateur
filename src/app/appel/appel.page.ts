import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-appel',
  templateUrl: './appel.page.html',
  styleUrls: ['./appel.page.scss'],
})
export class AppelPage implements OnInit {
  myForm: FormGroup;
  contacts$ : Observable<Contact[]>;
  main_color: String = "#1B264F";

  constructor(private contact : ContactService, private fb: FormBuilder, private alert: AlertController) {
    var dt = new Date();
    this.myForm = fb.group({
      duration: [''],
      date: [dt.toISOString()],
      phone_number_destination: ['']
    })
  }

  ngOnInit() {
    this.contacts$ = this.contact.findAll();
  }

  async presentAlert(message = "Une erreur inconnue s'est produite") {
    const alert = await this.alert.create({
      cssClass: 'erreur',
      header: 'Erreur',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit() {

    this.contact.makeCall(this.myForm.value).then(response => {
      response.subscribe(
        _arr => {
          if (_arr.status?.code != 200) {
            this.presentAlert(_arr.status?.message);
          }
        }
      );
      this.myForm.get("duration").setValue('');
    })
  }

}
