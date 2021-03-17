import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
})
export class CreditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  go(link: String) {
    this.router.navigate([`credit/${link}`]);
  }
}
