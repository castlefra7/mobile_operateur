import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Application } from './application';
import { ApplicationsService } from './services/applications.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {
  myForm: FormGroup;
  applications : Application[];

  constructor(private application : ApplicationsService, private fb: FormBuilder) {
    var dt = new Date();
    this.myForm = fb.group({
      amount: [''],
      created_at: [dt.toISOString()],
      internet_application_id: ['']
    })
  }

  ngOnInit() {
    this.application.findAll().subscribe(response => {
      console.log(response);
      if(response.status?.code == 200) {
        this.applications = response.data;
      }
    });
  }

  onSubmit() {
    console.log(this.myForm.value);

    this.application.useInternet(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("amount").setValue('');
    })
  }
}
