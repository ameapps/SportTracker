import { Injectable } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DatabaseService } from '../Database/database.service';
import { DbType } from '../../Enums/DbType';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private database: DatabaseService) {}

  // #region methods

  async getFoodData() {
    try {
      return await this.database.getReportFoodData(DbType.FIREBASE);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  }
  async getTrainingData() {
    try {
      return await this.database.getReportTrainingData(DbType.FIREBASE);
    } catch (error) {
      console.error('Error fetching training data:', error);
    }
  }
  // #endregion
}
