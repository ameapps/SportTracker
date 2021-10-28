import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CycletteRoutingModule } from './cyclette-routing.module';
import { CycletteComponent } from './cyclette.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [CycletteComponent],
  exports: [CycletteComponent],
  imports: [
    CommonModule,
    CycletteRoutingModule,
    MatSelectModule
  ]
})
export class CycletteModule { }
