import { Component, Input } from '@angular/core';
import { faTemperatureLow, faTemperatureHigh, faDroplet, faWind} from '@fortawesome/free-solid-svg-icons';
import { WheatherDatas } from 'src/app/models/interfaces/Weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  @Input() weatherDatasInput!: WheatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcoon = faDroplet;
  windIcon = faWind;
}
