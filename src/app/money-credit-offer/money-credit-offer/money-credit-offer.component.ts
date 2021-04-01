import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-money-credit-offer',
  templateUrl: './money-credit-offer.component.html',
  styleUrls: ['./money-credit-offer.component.scss'],
})
export class MoneyCreditOfferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goMobile(link: String) {
    this.router.navigate([`mobile-money/${link}`]);
  }


  goCredit(link: String) {
    this.router.navigate([`credit/${link}`]);
  }

  goOffer(link: String) {
    this.router.navigate([`offers/${link}`]);
  }
}
