import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MobileMoneyService } from '../../services/mobile-money.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  myForm: FormGroup;

  constructor(private moneyService: MobileMoneyService, private fb: FormBuilder) {
    var dt = new Date();
    this.myForm = fb.group({
      amount: [0],
      date: [dt.toISOString()],
    })
  }

  ngOnInit() {}

  onSubmit() {

    this.moneyService.makeDeposit(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("amount").setValue(0);
    })
  }

}
