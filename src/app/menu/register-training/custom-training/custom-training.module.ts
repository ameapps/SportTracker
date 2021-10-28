import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTrainingRoutingModule } from './custom-training-routing.module';
import { CustomTrainingComponent } from './custom-training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TapisRoulantModule } from './Tapis roulant/tapis-roulant.module';


@NgModule({
  declarations: [CustomTrainingComponent],
  exports: [CustomTrainingComponent],
  imports: [
    CommonModule,
    CustomTrainingRoutingModule,
    TapisRoulantModule
  ]
})
export class CustomTrainingModule { }
