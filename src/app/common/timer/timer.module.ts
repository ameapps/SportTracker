import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { ChronoTimePickerComponent } from './chrono-time-picker/chrono-time-picker.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
  declarations: [TimerComponent, ChronoTimePickerComponent, DigitalClockComponent],
  exports: [TimerComponent, ChronoTimePickerComponent, DigitalClockComponent],
  imports: [
    CommonModule,
    TimerRoutingModule,
    NgxMaterialTimepickerModule
  ]
})
export class TimerModule { }
