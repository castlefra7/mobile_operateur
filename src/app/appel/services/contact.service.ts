import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../contact';

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

  constructor() { }

  findAll() : Observable<Contact[]> {
    return of(this.contacts);
  }
}
