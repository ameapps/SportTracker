import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoTimePickerComponent } from './chrono-time-picker.component';

const routes: Routes = [
  {
    path: '',
    component: ChronoTimePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChronoTimePickerRoutingModule { }
