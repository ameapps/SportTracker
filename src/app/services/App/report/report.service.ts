import { Injectable } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DatabaseService } from '../Database/database.service';
import { DbType } from '../../Enums/DbType';
import { FirebaseHelper } from 'src/app/helpers/FirebaseHelper';
import { ChartModel } from 'src/app/Models/chart.model';
import { countByGroup, distinct, groupBy } from 'src/app/helpers/arrayHelper';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private database: DatabaseService) {}

  // #region methods

  async getFoodData() {
    try {
      //01. Recupera i dati degli allenamenti dal database
      const foodHistory = await this.database.getReportFoodData(
        DbType.FIREBASE
      );
      //02. Li normalizzo
      const mapped = FirebaseHelper.Normalize(foodHistory) as Array<{ category: string; amount: number; [key: string]: any }>;
      console.log('mapped foodHistory', mapped);
      //03. Creo i dati per il grafico
      const labels = distinct(mapped.map((item) => item.category));
      const aggr = countByGroup(mapped, 'category');
      const chartData: ChartModel[] = [];
      // aggr.forEach(element => {
      //   chartData.push({
      //     labels: [element.group],
      //     data: [element.count],
      //   });
      // });

      return chartData;
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  }

  async getTrainingData() {
    try {
      //01. Recupera i dati degli allenamenti dal database
      const trainingData = await this.database.getReportTrainingData(
        DbType.FIREBASE
      );
      //02. Li normalizzo
      const mapped = FirebaseHelper.Normalize(trainingData);
      console.log('mapped trainingData', mapped);
      //03. Creo i dati per il grafico
      const labels = mapped.map((item) => item.dateTime);
      return mapped;
    } catch (error) {
      console.error('Error fetching training data:', error);
    }
  }
  // #endregion
}

