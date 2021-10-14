import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChronoTimePickerRoutingModule } from './chrono-time-picker-routing.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ChronoTimePickerComponent } from './chrono-time-picker.component';


@NgModule({
  declarations: [ChronoTimePickerComponent],
  exports: [ChronoTimePickerComponent],
  imports: [
    CommonModule,
    ChronoTimePickerRoutingModule,
    NgxMaterialTimepickerModule
  ]
})
export class ChronoTimePickerModule { }
