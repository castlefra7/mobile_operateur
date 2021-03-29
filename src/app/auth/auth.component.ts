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
      phone_number: ['3302', Validators.required]
    });

  }

  ngOnInit() { }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {

    const { phone_number } = this.myForm.value;
    this.authService.login(phone_number).then(result => {
      if (result == true) {
        this.router.navigate(['/mobile-money']);
      } else {
        this.myForm.controls.phone_number.setErrors({invalidPhone: true});
      }
    });
  }
}
