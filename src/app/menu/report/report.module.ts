import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { NgChartsModule } from 'ng2-charts'; // <-- CORRETTO!
import { IonicModule } from '@ionic/angular';
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  declarations: [ReportComponent],
  exports: [ReportComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgChartsModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
