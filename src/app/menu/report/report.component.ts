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
    plugins: { legend: { display: true } },
  };
  public barChartType: ChartType = 'bar';

  public trainingPage: number = 0;
  public foodPage: number = 0;
  public pageSize: number = 2;
  Math: any = Math;

  constructor(public report_service: ReportService) {}
  async ngOnInit(): Promise<void> {
    this.trainingChartData = await this.report_service.getTrainingData();
    this.foodChartData = await this.report_service.getFoodData();
  }

  get pagedTrainingLabels() {
    const start = this.trainingPage * this.pageSize;
    return this.trainingChartData.labels.slice(start, start + this.pageSize);
  }
  get pagedTrainingData() {
    const start = this.trainingPage * this.pageSize;
    return this.trainingChartData.data.slice(start, start + this.pageSize);
  }
  get pagedFoodLabels() {
    const start = this.foodPage * this.pageSize;
    return this.foodChartData.labels.slice(start, start + this.pageSize);
  }
  get pagedFoodData() {
    const start = this.foodPage * this.pageSize;
    return this.foodChartData.data.slice(start, start + this.pageSize);
  }
}
