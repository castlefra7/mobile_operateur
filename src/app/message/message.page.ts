import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../appel/contact';
import { ContactService } from '../appel/services/contact.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  myForm: FormGroup;

  contacts$: Observable<Contact[]>;

  constructor(private contacts: ContactService, private router: Router, private fb: FormBuilder, private message: MessageService) {
    var dt = new Date();
    this.myForm = fb.group({
      text: [''],
      date: [dt.toISOString()],
      phone_number_destination: ['']
    })
  }

  ngOnInit() {
    this.contacts$ = this.contacts.findAll();
  }

  go(link: String) {
    this.router.navigate([`message/${link}`]);
  }

  onSubmit() {

    this.message.sendMessage(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("text").setValue('');
    })
  }

}
