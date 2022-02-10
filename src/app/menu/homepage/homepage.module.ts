import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [HomepageComponent, LoginComponent],
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
  export class HomepageModule { }
})
