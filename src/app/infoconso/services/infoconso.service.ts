import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpResponseBody } from 'src/app/commons/common.service';
import { environment } from 'src/environments/environment';
import { InfoConso } from '../infoconso';

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



  async getBalances(): Promise<Array<Balances>> {

    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const phone = await this.auth.getPhone();
    const url = `${environment.url}/balances?phone_number=${phone}`;
    const response = await this.http.get<HttpResponseBody>(url, options).toPromise();
    const result = await new Promise<Array<Balances>>((resolve, reject) => {
      if(response.status?.code == 200) {
        resolve(response.data);
      } else {
        reject(response);
      }
    })
    return result;
  }
  // findByCustomerId(customerId: number): Observable<InfoConso[]> {
  //   // return of(this.infoConso);
  // }
}
