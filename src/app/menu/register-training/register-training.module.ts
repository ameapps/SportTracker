import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterTrainingRoutingModule } from './register-training-routing.module';
import { RegisterTrainingComponent } from './register-training.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/modules/material/material.module';


@NgModule({
  declarations: [RegisterTrainingComponent],
  imports: [
    CommonModule,
    RegisterTrainingRoutingModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class RegisterTrainingModule { }
