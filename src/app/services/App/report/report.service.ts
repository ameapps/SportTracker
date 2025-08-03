import { Injectable } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DatabaseService } from '../Database/database.service';
import { DbType } from '../../Enums/DbType';
import { FirebaseHelper } from 'src/app/helpers/FirebaseHelper';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private database: DatabaseService) {}

  // #region methods

  async getFoodData() {
    try {
      const foodHistory = await this.database.getReportFoodData(
        DbType.FIREBASE
      );
      console.log('getFoodData', foodHistory);
      const mapped = FirebaseHelper.Normalize(foodHistory);
      console.log('mapped foodHistory', mapped);
      return mapped;
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  }

  async getTrainingData() {
    try {
      const trainingData = await this.database.getReportTrainingData(
        DbType.FIREBASE
      );
      console.log('trainingData', trainingData);

      const mapped = FirebaseHelper.Normalize(trainingData);
      console.log('mapped trainingData', mapped);
      return mapped;
    } catch (error) {
      console.error('Error fetching training data:', error);
    }
  }
  // #endregion
}
