import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  // Esempio dati per allenamenti
  trainingLabels = ['2025-07-01', '2025-07-02', '2025-07-03'];
  trainingData = [
    { label: 'Cyclette', data: [30, 45, 20] },
    { label: 'Treadmill', data: [20, 15, 40] }
  ];

  // Esempio dati per cibi
  foodLabels = ['Banana', 'Rice', 'Chicken', 'Apple'];
  foodData = [5, 3, 2, 4];

  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: { legend: { display: true } }
  };
  barChartType: ChartType = 'bar';
}
