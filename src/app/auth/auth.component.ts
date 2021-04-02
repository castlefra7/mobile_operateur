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
  main_color: String = "linear-gradient(to bottom right, #FCCA46 40%,#1B264F 60%)";
  back_color: String = "#F5F3F5";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.myForm = this.fb.group({
      phone_number: ['+261331876577', Validators.required]
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
        this.router.navigate(['/money-credit-offer']);
      } else {
        this.myForm.controls.phone_number.setErrors({invalidPhone: true});
      }
    });
  }
}
