import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterTrainingRoutingModule } from './register-training-routing.module';
import { RegisterTrainingComponent } from './register-training.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TimerModule } from 'src/app/common/timer/timer.module';
import {MatStepperModule} from '@angular/material/stepper';
import { SelectorModule } from 'src/app/common/selector/selector.module';
import { CustomTrainingModule } from './custom-training/custom-training.module';
import {MatButtonModule} from '@angular/material/button';
import { RtStep3Module } from './stepper/step 3/register-step3/rt-step3/rt-step3.module';
import { IonicModule } from "@ionic/angular";


@NgModule({
  declarations: [RegisterTrainingComponent],
  imports: [
    CommonModule,
    RegisterTrainingRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    TimerModule,
    MatStepperModule,
    SelectorModule,
    CustomTrainingModule,
    MatButtonModule,
    RtStep3Module,
    IonicModule
]
})
export class RegisterTrainingModule { }
