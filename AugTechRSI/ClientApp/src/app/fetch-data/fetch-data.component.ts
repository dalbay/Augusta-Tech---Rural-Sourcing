import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    source: LocalDataSource;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.source = new LocalDataSource()
     
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
