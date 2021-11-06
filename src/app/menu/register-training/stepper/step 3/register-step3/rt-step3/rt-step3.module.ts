import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RtStep3RoutingModule } from './rt-step3-routing.module';
import { RtStep3Component } from './rt-step3.component';


@NgModule({
  declarations: [RtStep3Component],
  exports: [RtStep3Component],
  imports: [
    CommonModule,
    RtStep3RoutingModule
  ]
})
export class RtStep3Module { }
