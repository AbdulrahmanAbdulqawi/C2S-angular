import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userData = {
    email: '',
    password: '',
    name: 'abdulrahman'

  };
  rememberMe: boolean = false;
  loginForm: FormGroup = new FormGroup({}); // Initialize with an empty FormGroup

  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) { }

  login() {

    this.weatherService.login(this.userData).subscribe(
      response => {
        console.log('User login successfully', response);
      },
      error => {
        console.error('Error login', error);
      }
    );
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]]
    });
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
