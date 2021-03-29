import { Component, OnInit } from '@angular/core';
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

  constructor(private info: InfoconsoService) { }

  ngOnInit() {
    // this.info.getBalances().subscribe(response => {
    //   console.log(response);
    // })
    this.getData(); 
  }

  getData() {
    this.info.getBalances()
    .then(res => {
      console.log(res);
      if(res != null && res.length >0 ){
        this.credit = res[0].creditBalance;
        this.money = res[0].mobileMoneyBalance;
      }
    })
    .catch(error =>  console.log(error))
  }

  

  doRefresh(event) {
    console.log('Begin async operation');
    this.getData(); 
      event.target.complete();

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    // }, 2000);
  }

}
