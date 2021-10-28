import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TapisRoulantRoutingModule } from './tapis-roulant-routing.module';
import { TapisRoulantComponent } from './tapis-roulant.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [TapisRoulantComponent],
  exports: [TapisRoulantComponent],
  imports: [
    CommonModule,
    TapisRoulantRoutingModule,
    MatSelectModule
  ]
})
export class TapisRoulantModule { }
