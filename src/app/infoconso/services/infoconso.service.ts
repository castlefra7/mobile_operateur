import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import {  HttpResponseBodyBalance } from 'src/app/commons/common.service';
import { environment } from 'src/environments/environment';

export interface Balances {
  creditBalance: Number;
  mobileMoneyBalance: Number;
  remainingOffers: {};
  remainCalIntMess: String;
  remainOffers: String;
}

@Injectable({
  providedIn: 'root'
})
export class InfoconsoService {

  constructor(private http: HttpClient, private auth: AuthService) { }



  async getBalances(date: String): Promise<Array<Balances>> {
    console.log(date)
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const phone = await this.auth.getPhone();
    const url = `${environment.url}/balances?phone_number=${phone}&date=${date}`;
    const response = await this.http.get<HttpResponseBodyBalance>(url, options).toPromise();
    const result = await new Promise<Array<Balances>>((resolve, reject) => {
      if(response.status?.code == 200) {
        resolve(response.data);
      } else {
        reject(response);
      }
    })
    return result;
  }

}
