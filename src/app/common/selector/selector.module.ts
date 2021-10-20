import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorRoutingModule } from './selector-routing.module';
import { SelectorComponent } from './selector.component';


@NgModule({
  declarations: [SelectorComponent],
  exports: [SelectorComponent],
  imports: [
    CommonModule,
    SelectorRoutingModule
  ]
})
export class SelectorModule { }
