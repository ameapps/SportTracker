import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterTrainingRoutingModule } from './register-training-routing.module';
import { RegisterTrainingComponent } from './register-training.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/modules/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { ChronoTimePickerModule } from 'src/app/common/chrono-time-picker/chrono-time-picker.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TimerModule } from 'src/app/common/timer/timer.module';
import {MatStepperModule} from '@angular/material/stepper';
import { SelectorModule } from 'src/app/common/selector/selector.module';
import { CustomTrainingModule } from './custom-training/custom-training.module';



@NgModule({
  declarations: [RegisterTrainingComponent],
  imports: [
    CommonModule,
    RegisterTrainingRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    ChronoTimePickerModule,
    MatCheckboxModule,
    TimerModule,
    MatStepperModule,
    SelectorModule,
    CustomTrainingModule
  ]
})
export class RegisterTrainingModule { }
