// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import the new component
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent ,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule , // Add HttpClientModule here
    ReactiveFormsModule,
    AppRoutingModule 
],
  providers: [WeatherService, provideAnimationsAsync('noop')],
  bootstrap: [AppComponent]
})
export class AppModule { }
