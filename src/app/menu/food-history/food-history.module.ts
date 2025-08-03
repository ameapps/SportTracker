import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodHistoryRoutingModule } from './food-history-routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodHistoryComponent } from './food-history.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [FoodHistoryComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    FoodHistoryRoutingModule,
    IonicModule,
    ReactiveFormsModule,
  ],
})
export class FoodHistoryModule {}
