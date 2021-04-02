import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpResponseBody } from 'src/app/commons/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface Message {
  text: Number;
  phone_number_source: String;
  phone_number_destination: String;
  date: String;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  
  async sendMessage(newMessage: Message): Promise<Observable<HttpResponseBody>> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const phone = await this.auth.getPhone();
    newMessage.phone_number_source = phone;
    return this.http.post(`${environment.url}/consume/messages`, newMessage, options)
  }

}
