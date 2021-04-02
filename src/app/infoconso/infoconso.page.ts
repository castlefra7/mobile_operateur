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
  remainCalIntMess: String = "";
  remainOffers: String = "";
  main_color: String = "#1B264F";
  back_color: String = "#F5F3F5";

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
        this.remainCalIntMess = res[0].remainCalIntMess;
        this.remainOffers = res[0].remainOffers;
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
