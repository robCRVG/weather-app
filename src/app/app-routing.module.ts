import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'weather',
  pathMatch: 'full',
},
{
  path: 'weather',
  component: WeatherHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
