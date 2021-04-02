import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpResponseBody } from 'src/app/commons/common.service';
import { Contact } from '../contact';
import { environment } from 'src/environments/environment';

export interface Call {
  duration: Number;
  phone_number_source: String;
  phone_number_destination: String;
  date: String;
}


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts : Contact[] = [
    { id: 1, name: "John Mayer", phoneNumber : "034 19 415 56"},
    { id: 2, name: "Tom Cruise", phoneNumber : "034 29 999 60"},
    { id: 3, name: "Valentino Rossi", phoneNumber : "032 20 440 52"},
    { id: 4, name: "Brad Traversy", phoneNumber : "033 12 660 03"},
    { id: 5, name: "Gareth Bale", phoneNumber : "034 39 450 26"}
  ];

  constructor(private http: HttpClient, private auth: AuthService) { }

  findAll() : Observable<Contact[]> {
    return of(this.contacts);
  }

  async makeCall(newCall: Call): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newCall.phone_number_source = phone;
    return this.http.post(`${environment.url}/consume/calls`, newCall, options)
  }

}
