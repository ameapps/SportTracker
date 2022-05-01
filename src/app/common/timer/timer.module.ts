import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { ChronoTimePickerModule } from './chrono-time-picker/chrono-time-picker.module';
import { DigitalClockModule } from './digital-clock/digital-clock.module';


@NgModule({
  declarations: [TimerComponent],
  exports: [TimerComponent],
  imports: [
    CommonModule,
    TimerRoutingModule,
    ChronoTimePickerModule,
    DigitalClockModule
  ]
})
export class TimerModule { }
