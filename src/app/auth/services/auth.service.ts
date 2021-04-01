import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Plugins
} from '@capacitor/core';
import { HttpResponseBody } from 'src/app/commons/common.service';
import { environment } from 'src/environments/environment';
const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private CONTACT_STORAGE: string = "phone_number";

  constructor(private http: HttpClient) { }

  async login(phone_number: string) {
    // call an endpoint to check if this phone number exists
    // if so then set the storage api
    const options = {
      headers: {
        "Content-Type": "application/json"
      },
    };
    console.log(environment.url);
    const response = await this.http.get<HttpResponseBody>(`${environment.url}/phone_exists?phone_number=${phone_number}`, options).toPromise();
    const result = await new Promise((resolve, reject) => {
      if (response.status?.code == 200) {
        if (response.data?.length > 0) {
          response.data?.forEach((row, index) => {
            if (index == 0) {
              if (row != null) {
                Storage.set({
                  key: this.CONTACT_STORAGE,
                  value: JSON.stringify(phone_number)
                });
                resolve(true);
              } else {
                resolve(false);
              }
            }
          });
        }
      }
    });
    return result;
  }

  logout() {
    Storage.remove({ key: this.CONTACT_STORAGE });
  }

  async getPhone() {
    const phone_number = await Storage.get({ key: this.CONTACT_STORAGE });
    return JSON.parse(phone_number.value);
  }

  async isLoggedIn() {
    const phone_number = await Storage.get({ key: this.CONTACT_STORAGE });
    if (phone_number.value) {
      return true;
    }
    return false;
  }
}
