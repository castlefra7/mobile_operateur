import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-money',
  templateUrl: './mobile-money.component.html',
  styleUrls: ['./mobile-money.component.scss'],
})
export class MobileMoneyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(link: String) {
    this.router.navigate([`mobile-money/${link}`]);
  }

}
