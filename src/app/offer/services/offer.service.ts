import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpResponseBody } from 'src/app/commons/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface Offer {
  phone_number: String;
  date: String;
  code: String;
}

export interface OfferMobile  extends Offer {
  password: String;
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  
  constructor(private http: HttpClient, private auth: AuthService) { }

  async buyOfferMobile(newOffer: OfferMobile): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newOffer.phone_number = phone;
    console.log(newOffer);
    return this.http.post(`${environment.url}/offers/buyfrommobile`, newOffer, options)
  }
  
  async buyOffer(newOffer: Offer): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newOffer.phone_number = phone;
    console.log(newOffer);
    return this.http.post(`${environment.url}/offers/buy`, newOffer, options)
  }

}
