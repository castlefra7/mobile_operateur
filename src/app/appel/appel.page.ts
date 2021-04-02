import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-appel',
  templateUrl: './appel.page.html',
  styleUrls: ['./appel.page.scss'],
})
export class AppelPage implements OnInit {
  myForm: FormGroup;
  contacts$ : Observable<Contact[]>;
  main_color: String = "#1B264F";

  constructor(private contact : ContactService, private fb: FormBuilder) {
    var dt = new Date();
    this.myForm = fb.group({
      duration: [''],
      date: [dt.toISOString()],
      phone_number_destination: ['']
    })
  }

  ngOnInit() {
    this.contacts$ = this.contact.findAll();
  }
  onSubmit() {

    this.contact.makeCall(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("duration").setValue('');
    })
  }

}
