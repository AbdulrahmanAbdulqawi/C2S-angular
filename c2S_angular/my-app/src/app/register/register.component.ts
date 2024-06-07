import { Component, ViewChild  } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { NgForm } from '@angular/forms'; // Import NgForm
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData = {
    email: '',
    password: '',
    role: 0, // Adjust as necessary
    name: '',
    phone: '7715748',
    address: 'sad',
    profilePicture: 'som'
  };
  rememberMe: boolean = false;
  @ViewChild('registerForm') registerForm: NgForm; // Define loginForm using ViewChild

  constructor(private weatherService: WeatherService) { 

    this.registerForm = {} as NgForm;

  }
  showLogin = false;

  toggleView(event: Event): void {
    event.preventDefault();
    this.showLogin = !this.showLogin;
  }
  registerUser() {

    if (this.registerForm.invalid) {
      // Mark all fields as touched to display validation messages
      this.markFormGroupTouched(this.registerForm.form);
      return;
    }
    this.weatherService.registerNewUser(this.userData).subscribe(
      response => {
        console.log('User registered successfully', response);
      },
      error => {
        console.error('Error registering user', error);
      }
    );
  }

  markFormGroupTouched(formGroup: any) {
    Object.values(formGroup.controls).forEach((control: any) => { // Explicitly type control as any
      control.markAsTouched();
  
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  

}
