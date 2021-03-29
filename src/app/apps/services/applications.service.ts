import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpResponseBody } from 'src/app/commons/common.service';
import { environment } from 'src/environments/environment';
import { Application } from '../application';

export interface Internet {
  amount: String;
  phone_number: String;
  internet_application_id: Number;
  created_at: String;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  // applications : Application[] = [
  //   { id : 1, name : "Facebook", units : [ { id: 1, name : "Mo" } ] },
  //   { id : 2, name : "Instagram", units : [ { id: 1, name : "Mo" } ] },
  //   { id : 3, name : "Internet", units : [ { id: 1, name : "Mo" } ] },
  // ];

  constructor(private http: HttpClient, private auth: AuthService) { }

  findAll() : Observable<HttpResponseBody> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.get<HttpResponseBody>(`${environment.url}/apps/internet`, options);
    //return of(this.applications);
  }

  async useInternet(newInternet: Internet): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newInternet.phone_number = phone;
    console.log(newInternet);
    return this.http.post(`${environment.url}/consume/internet`, newInternet, options)
  }
}
