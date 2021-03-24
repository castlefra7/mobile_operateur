import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private contacts : ContactService, private router: Router ) { }

  ngOnInit() {
    this.contacts$ = this.contacts.findAll();
  }

  go(link: String) {
    this.router.navigate([`message/${link}`]);
  }

}
