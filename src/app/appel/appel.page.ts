import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-appel',
  templateUrl: './appel.page.html',
  styleUrls: ['./appel.page.scss'],
})
export class AppelPage implements OnInit {

  contacts$ : Observable<Contact[]>;

  constructor(private contacts : ContactService) { }

  ngOnInit() {
    this.contacts$ = this.contacts.findAll();
  }

}
