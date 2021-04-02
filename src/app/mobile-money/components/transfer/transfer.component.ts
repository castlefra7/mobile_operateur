import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MobileMoneyService } from '../../services/mobile-money.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {

  myForm: FormGroup;
  main_color: String = "#1B264F";

  constructor(private moneyService: MobileMoneyService, private fb: FormBuilder) {
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

    this.moneyService.transfer(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("amount").setValue(0);
    })
  }

}
