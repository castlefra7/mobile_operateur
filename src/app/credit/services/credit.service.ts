import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { HttpResponseBody } from 'src/app/commons/common.service';
import { environment } from 'src/environments/environment';

export interface OperationI {
  amount: Number;
  phone_number: String;
  date: String;
}

export interface Buy extends OperationI {
}

export interface Transfer extends OperationI {
  password: String;
  phone_number_destination: String;
}

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async buyCredit(newBuy: Buy): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newBuy.phone_number = phone;
    return this.http.post(`${environment.url}/credits/buy`, newBuy, options)
  }

  async transfer(newTransfer: Transfer): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newTransfer.phone_number = phone;
    return this.http.post(`${environment.url}/credits/transfer`, newTransfer, options)
  }
  
}
