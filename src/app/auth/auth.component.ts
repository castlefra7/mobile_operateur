import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
     this.myForm = this.fb.group({
      'phone_number': ['3302', Validators.required]
    })  
  }

  ngOnInit() { }

  onLogin() {
    console.log(this.myForm.value);
    const {phone_number} = this.myForm.value;
    if(this.authService.login(phone_number)) {
      this.router.navigate(['/mobile-money']);
    }
  }
}
