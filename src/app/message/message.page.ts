import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Contact } from '../appel/contact';
import { ContactService } from '../appel/services/contact.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  myForm: FormGroup;

  contacts$: Observable<Contact[]>;
  main_color: String = "#1B264F";

  constructor(private contacts: ContactService, private router: Router, private fb: FormBuilder, private message: MessageService, private alert: AlertController) {
    var dt = new Date();
    this.myForm = fb.group({
      text: [''],
      date: [dt.toISOString()],
      phone_number_destination: ['']
    })
  }

  ngOnInit() {
    this.contacts$ = this.contacts.findAll();
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

  go(link: String) {
    this.router.navigate([`message/${link}`]);
  }

  onSubmit() {

    this.message.sendMessage(this.myForm.value).then(response => {
      response.subscribe(
        _arr => {
          if (_arr.status?.code != 200) {
            this.presentAlert(_arr.status?.message);
          }
        }
      );
      this.myForm.get("text").setValue('');
    })
  }

}
