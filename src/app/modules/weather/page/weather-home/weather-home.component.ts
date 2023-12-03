import { WheatherDatas } from 'src/app/models/interfaces/Weather';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit, OnDestroy{

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName: string = 'Brasília';
  wheatherDatas!: WheatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void{
    this.weatherService.getweatherDatas(cityName).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        response && (this.wheatherDatas = response);
        console.log(this.wheatherDatas);
      },
      error: (error) => console.log(error),
    });
  }

  onSubimit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next;
    this.destroy$.complete();
  }
}
