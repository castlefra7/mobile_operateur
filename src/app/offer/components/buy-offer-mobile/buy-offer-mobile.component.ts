import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-buy-offer-mobile',
  templateUrl: './buy-offer-mobile.component.html',
  styleUrls: ['./buy-offer-mobile.component.scss'],
})
export class BuyOfferMobileComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(private offer: OfferService, private fb: FormBuilder,) {
    var dt = new Date();
    this.myForm = fb.group({
      code: [''],
      date: [dt.toISOString()],
      password: ['']
    })

  }

  ngOnInit() { }
  
  onSubmit() {

    this.offer.buyOfferMobile(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("code").setValue('');
      this.myForm.get("password").setValue('');
    })
  }

}
