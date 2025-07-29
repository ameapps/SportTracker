import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { LoginComponent } from '../login/login.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HomepageComponent, LoginComponent],
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    IonicModule // aggiungi questa riga
  ]
})

export class HomepageModule { }