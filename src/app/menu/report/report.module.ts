import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ReportComponent],
  exports: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    IonicModule // aggiungi questa riga
  ]
})
export class ReportModule { }
