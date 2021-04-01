import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {

  orange: String = "blue";
  secondary_color: String = "red";
  deposit_img: String = "assets/mobile_money/deposit.svg";
  withdraw_img: String = "assets/mobile_money/withdraw.svg";
  transfer_img: String = "assets/mobile_money/transfer.svg";
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("ato")
  }

  go(link: String) {
    this.router.navigate([`mobile-money/${link}`]);
  }
}
