import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { ReportService } from 'src/app/services/App/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {

  constructor(public report_service: ReportService) {

  }
  async ngOnInit(): Promise<void> {
    await this.report_service.getTrainingData();
    await this.report_service.getFoodData();
  }

  // Esempio dati per allenamenti
  public trainingLabels = ['2025-07-01', '2025-07-02', '2025-07-03'];
  public trainingData = [
    { label: 'Cyclette', data: [30, 45, 20] },
    { label: 'Treadmill', data: [20, 15, 40] }
  ];

  // Esempio dati per cibi
  public foodLabels = ['Banana', 'Rice', 'Chicken', 'Apple'];
  public foodData = [5, 3, 2, 4];

  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: { legend: { display: true } }
  };
  public barChartType: ChartType = 'bar';
}
