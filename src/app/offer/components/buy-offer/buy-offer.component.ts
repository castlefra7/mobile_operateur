import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfferService } from '../../services/offer.service';


@Component({
  selector: 'app-buy-offer',
  templateUrl: './buy-offer.component.html',
  styleUrls: ['./buy-offer.component.scss'],
})
export class BuyOfferComponent implements OnInit {
  myForm: FormGroup;
  main_color: String = "#1B264F";

  constructor(private offer: OfferService, private fb: FormBuilder,) {
    var dt = new Date();
    this.myForm = fb.group({
      code: [''],
      date: [dt.toISOString()]
    })

  }

  ngOnInit() { }
  
  onSubmit() {

    this.offer.buyOffer(this.myForm.value).then(response => {
      response.subscribe(
        data => console.log(data)
      );
      this.myForm.get("code").setValue('');
    })
  }
}
