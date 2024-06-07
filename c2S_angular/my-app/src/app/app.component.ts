import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'my-app';

  weatherData: any;
  products = [
    {
      image: 'path/to/image1.jpg',
      title: 'Chair 1',
      description: 'Stylish chair with wooden frame'
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Chair 2',
      description: 'Comfortable leather seat chair'
    },
    {
      image: 'path/to/image3.jpg',
      title: 'Chair 3',
      description: 'Elegant dining chair'
    },
    // Add more products as needed
  ];


  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherForecast().subscribe(data => {
      this.weatherData = data;
    });
  }
}
