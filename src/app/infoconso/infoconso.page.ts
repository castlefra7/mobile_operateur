import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InfoconsoService } from './services/infoconso.service';

@Component({
  selector: 'app-infoconso',
  templateUrl: './infoconso.page.html',
  styleUrls: ['./infoconso.page.scss'],
})
export class InfoconsoPage implements OnInit {
  credit: Number = 0;
  money: Number = 0;
  remaing: {} = {};
  remainCalIntMess: String = "";
  remainOffers: String = "";
  main_color: String = "#1B264F";
  back_color: String = "#F5F3F5";
  myForm: FormGroup;

  constructor(private info: InfoconsoService, private fb: FormBuilder) {
    var dt = new Date();
    this.myForm = fb.group({
      date: [dt.toISOString()],
    })
  }

  onSubmit() {
    this.getData(); 
  }

  ngOnInit() {
    this.getData(); 
  }

  getData() {
    const values = this.myForm.value;
    this.info.getBalances(values.date)
    .then(res => {
      if(res != null && res.length >0 ){
        this.credit = res[0].creditBalance;
        this.money = res[0].mobileMoneyBalance;
        this.remainCalIntMess = res[0].remainCalIntMess;
        this.remainOffers = res[0].remainOffers;
      }
    })
    .catch(error =>  console.log(error))
  }

  

  doRefresh(event) {
    this.getData(); 
      event.target.complete();
  }

}
