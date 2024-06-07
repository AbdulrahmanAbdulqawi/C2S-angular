import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://localhost:5273/weatherforecast/GetWeatherForecast'; // Adjust the URL to your API
  private authUrl = 'https://localhost:5273/api/Auth/register'; // URL for registering a user
  private loginAuthUrl = 'https://localhost:5273/api/Auth/login'; // URL for registering a user

  constructor(private http: HttpClient) { }

  getWeatherForecast(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  registerNewUser(userData: any): Observable<any> {
    return this.http.post<any>(this.authUrl, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post<any>(this.loginAuthUrl, userData);
  }
}
