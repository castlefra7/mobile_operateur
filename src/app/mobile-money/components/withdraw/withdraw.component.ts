import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MobileMoneyService } from '../../services/mobile-money.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  myForm: FormGroup;
  main_color: String = "#1B264F";

  constructor(private moneyService: MobileMoneyService, private fb: FormBuilder) {
    var dt = new Date();
    this.myForm = fb.group({
      amount: [],
      date: [dt.toISOString()],
      password: ['']
    })
  }

  ngOnInit() {}

  onSubmit() {

    this.moneyService.withdraw(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("amount").setValue(0);
    })
  }

}
