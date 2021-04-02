import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreditService } from '../../services/credit.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {

 
  myForm: FormGroup;
  main_color: String = "#1B264F";

  constructor(private credit: CreditService, private fb: FormBuilder) {
    var dt = new Date();
    this.myForm = fb.group({
      amount: [],
      date: [dt.toISOString()],
      password: [''],
      phone_number_destination: ['']
    })
  }

  ngOnInit() {}

  onSubmit() {

    this.credit.transfer(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("amount").setValue(0);
    })
  }


}
