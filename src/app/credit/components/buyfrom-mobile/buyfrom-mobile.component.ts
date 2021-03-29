import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreditService } from '../../services/credit.service';

@Component({
  selector: 'app-buyfrom-mobile',
  templateUrl: './buyfrom-mobile.component.html',
  styleUrls: ['./buyfrom-mobile.component.scss'],
})
export class BuyfromMobileComponent implements OnInit {

  myForm: FormGroup;

  constructor(private credit: CreditService, private fb: FormBuilder) {
    var dt = new Date();
    this.myForm = fb.group({
      amount: [0],
      date: [dt.toISOString()],
      password: ['']
    })
  }

  ngOnInit() {}

  onSubmit() {

    this.credit.buyCreditFromMobileMoney(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("amount").setValue(0);
      this.myForm.get("password").setValue("");
    })
  }


}
