import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TapisRoulantRoutingModule } from './tapis-roulant-routing.module';
import { TapisRoulantComponent } from './tapis-roulant.component';
import { MatSelectModule } from '@angular/material/select';
import { TimerModule } from 'src/app/common/timer/timer.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [TapisRoulantComponent],
  exports: [TapisRoulantComponent],
  imports: [
    CommonModule,
    TapisRoulantRoutingModule,
    TimerModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
})
export class TapisRoulantModule {}
