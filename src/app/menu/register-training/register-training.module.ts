import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterTrainingRoutingModule } from './register-training-routing.module';
import { RegisterTrainingComponent } from './register-training.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterTrainingRoutingModule
  ],
  exports: [RegisterTrainingComponent]
})
export class RegisterTrainingModule { }
