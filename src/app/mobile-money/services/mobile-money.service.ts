import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { HttpResponseBody } from 'src/app/commons/common.service';

export interface OperationI {
  amount: Number;
  phone_number: String;
  date: String;
}

export interface Withdraw extends OperationI {
  password: String;
}

export interface Transfer extends Withdraw {
  phone_number_destination: String;
}

@Injectable({
  providedIn: 'root'
})
export class MobileMoneyService {


  constructor(private http: HttpClient, private auth: AuthService) {
  }

  async makeDeposit(newDeposit: OperationI): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newDeposit.phone_number = phone;
    return this.http.post(`${environment.url}/mobilemoney/deposit`, newDeposit, options);
  }

  async transfer(newTransfer: Transfer): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newTransfer.phone_number = phone;
    return this.http.post(`${environment.url}/mobilemoney/transfer`, newTransfer, options)
  }

  async withdraw(newWithdraw: Withdraw): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newWithdraw.phone_number = phone;
    return this.http.post(`${environment.url}/mobilemoney/withdraw`, newWithdraw, options)
  }
}
