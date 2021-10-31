import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalClockRoutingModule } from './digital-clock-routing.module';
import { DigitalClockComponent } from './digital-clock.component';


@NgModule({
  declarations: [DigitalClockComponent],
  exports: [DigitalClockComponent],
  imports: [
    CommonModule,
    DigitalClockRoutingModule
  ]
})
export class DigitalClockModule { }
