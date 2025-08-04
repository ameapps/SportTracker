import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { ChartDataModel, ChartModel } from 'src/app/Models/chart.model';
import { ReportService } from 'src/app/services/App/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {

  public trainingChartData: ChartModel = {
    labels: [],
    data: [] as ChartDataModel[],
  };
  public foodChartData: ChartModel = {
    labels: [],
    data: [] as ChartDataModel[],
  };
  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: { legend: { display: true } }
  };
  public barChartType: ChartType = 'bar';

  constructor(public report_service: ReportService) {

  }
  async ngOnInit(): Promise<void> {
    this.trainingChartData = await this.report_service.getTrainingData();
    this.foodChartData = await this.report_service.getFoodData();
  }

}
