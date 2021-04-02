import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/services/auth.service';
import { HttpResponseBodyBalance } from '../commons/common.service';

/*

 private String message;
    private int customer_id;
    private Date date:
    */

export interface Notif {
  message?: string;
  customer_id: number;
  date?: string;
}

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss'],
})
export class ListMessagesComponent implements OnInit {
  back_color: String = "#F5F3F5";
  notifications: Notif[] = [];
  title: string = "";
  main_color: String = "#1B264F";

  constructor(private http: HttpClient, private auth: AuthService, private alert: AlertController) {
    this.title = environment.op;
  }

  ngOnInit() {

    this.getData();

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

  getData() {
    this.getMessages().then(response=> {
      this.notifications = response;
    }).catch(err => {
      this.presentAlert(JSON.stringify(err));
    })
  }

  async getMessages(): Promise<Array<Notif>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const phone = await this.auth.getPhone();
    const url = `${environment.url}/balances/notifs?phoneNumber=${phone}`;
    const response = await this.http.get<HttpResponseBodyBalance>(url, options).toPromise();
    const result = await new Promise<Array<Notif>>((resolve, reject) => {
      if(response.status?.code == 200) {
        resolve(response.data);
      } else {
        reject(response);
      }
    })
    return result;
  }

}
