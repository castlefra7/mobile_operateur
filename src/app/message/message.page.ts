import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../appel/contact';
import { ContactService } from '../appel/services/contact.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contacts$ : Observable<Contact[]>;

  constructor(private contacts : ContactService) { }

  ngOnInit() {
    this.contacts$ = this.contacts.findAll();
  }

}
