import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTrainingRoutingModule } from './custom-training-routing.module';
import { CustomTrainingComponent } from './custom-training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TapisRoulantModule } from './Tapis roulant/tapis-roulant.module';
import { CycletteModule } from './cyclette/cyclette.module';
import { RunModule } from './run/run.module';


@NgModule({
  declarations: [CustomTrainingComponent],
  exports: [CustomTrainingComponent],
  imports: [
    CommonModule,
    CustomTrainingRoutingModule,
    TapisRoulantModule,
    CycletteModule,
    RunModule
  ]
})
export class CustomTrainingModule { }
