import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Application } from './application';
import { ApplicationsService } from './services/applications.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {
  myForm: FormGroup;
  applications : Application[];
  main_color: String = "#1B264F";

  constructor(private application : ApplicationsService, private fb: FormBuilder, private alert: AlertController) {
    var dt = new Date();
    this.myForm = fb.group({
      amount: [''],
      created_at: [dt.toISOString()],
      internet_application_id: ['']
    })
  }

  ngOnInit() {
  this.getData();
  }

  getData() {
    this.application.findAll().subscribe(response => {
      if(response.status?.code == 200) {
        this.applications = response.data;
      }
    });
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

  doRefresh(event) {
    this.getData(); 
      event.target.complete();
  }

  onSubmit() {

    this.application.useInternet(this.myForm.value).then(response => {
      response.subscribe(
        _arr => {
          if (_arr.status?.code != 200) {
            this.presentAlert(_arr.status?.message);
          }
        }
      );
      this.myForm.get("amount").setValue('');
    })
  }
}
