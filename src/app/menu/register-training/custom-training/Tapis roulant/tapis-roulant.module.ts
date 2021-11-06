import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TapisRoulantRoutingModule } from './tapis-roulant-routing.module';
import { TapisRoulantComponent } from './tapis-roulant.component';
import { MatSelectModule } from '@angular/material/select';
import { TimerModule } from 'src/app/common/timer/timer.module';


@NgModule({
  declarations: [TapisRoulantComponent],
  exports: [TapisRoulantComponent],
  imports: [
    CommonModule,
    TapisRoulantRoutingModule,
    TimerModule,
    MatSelectModule
  ]
})
export class TapisRoulantModule { }
