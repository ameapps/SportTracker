import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodHistoryComponent } from './food-history.component';

const routes: Routes = [
  {
    path:'',
    component: FoodHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodHistoryRoutingModule { }
