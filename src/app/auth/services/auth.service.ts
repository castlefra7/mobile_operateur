import { Injectable } from '@angular/core';
import {
  Plugins
} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private CONTACT_STORAGE: string = "phone_number";

  constructor() { }

  login(phone_number: string) {
    // call an endpoint to check if this phone number exists
    // if so then set the storage api
    if (phone_number == "0331112565") {
      Storage.set({
        key: this.CONTACT_STORAGE,
        value: JSON.stringify(phone_number)
      });
      return true;
    }
    return false;

  }

  async isLoggedIn() {
    const phone_number = await Storage.get({ key: this.CONTACT_STORAGE });
    if (phone_number.value) {
      return true;
    }
    return false;
  }
}
