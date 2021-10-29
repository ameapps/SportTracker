import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunRoutingModule } from './run-routing.module';
import { RunComponent } from './run.component';


@NgModule({
  declarations: [RunComponent],
  exports: [RunComponent],
  imports: [
    CommonModule,
    RunRoutingModule
  ]
})
export class RunModule { }
