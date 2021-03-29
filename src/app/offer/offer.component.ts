import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from './services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {}

  go(link: String) {
    this.router.navigate([`offers/${link}`]);
  }


}
