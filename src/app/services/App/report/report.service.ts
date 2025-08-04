import { Injectable } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DatabaseService } from '../Database/database.service';
import { DbType } from '../../Enums/DbType';
import { FirebaseHelper } from 'src/app/helpers/FirebaseHelper';
import { ChartModel } from 'src/app/Models/chart.model';
import { countByGroup, distinct, groupBy } from 'src/app/helpers/arrayHelper';
import { StringDecoder } from 'string_decoder';
import { StringHelper } from 'src/app/helpers/StringHelper';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private database: DatabaseService) {}

  // #region methods

  async getTrainingData(): Promise<ChartModel> {
    try {
      //01. Recupera i dati degli allenamenti dal database
      const trainingData = await this.database.getReportTrainingData(
        DbType.FIREBASE
      );
      //02. Li normalizzo
      const mapped = FirebaseHelper.Normalize(trainingData) as Array<{
        dateTime: string;
        duration: number;
        [key: string]: any;
      }>;
      console.log('mapped trainingData', mapped);
      //03. Creo i dati per il grafico
      const labelsUtc = mapped.map((item) => item.dateTime);
      //04. Converto le date da UTC0 a localtime gg/mm/yy
      const labelsLocal = labelsUtc.map((label) => {
        return StringHelper.convertUtcToLocalDateString(label);
      });
      //04. Raggruppo per data e mostro le calorie bruciate per ogni strumento
      const groupedByDate = groupBy(mapped, 'dateTime');
      const chartData: ChartModel = {
        labels: labelsLocal,
        data: Object.keys(groupedByDate).map((date) => ({
          label: StringHelper.convertUtcToLocalDateString(date),
          data: [
            groupedByDate[date].reduce(
              (sum, item) => sum + item.data.consumedKcal,
              0
            ),
          ],
        })),
      };
      return chartData;
    } catch (error) {
      console.error('Error fetching training data:', error);
    }
  }

  async getFoodData(): Promise<ChartModel> {
    try {
      //01. Recupera i dati degli allenamenti dal database
      const foodHistory = await this.database.getReportFoodData(
        DbType.FIREBASE
      );
      //02. Li normalizzo
      const mapped = FirebaseHelper.Normalize(foodHistory) as Array<{
        category: string;
        amount: number;
        [key: string]: any;
      }>;
      console.log('mapped foodHistory', mapped);
      //03. Creo i dati per il grafico
      const labels = distinct(mapped.map((item) => item.category));
      const aggr = countByGroup(mapped, 'category');
      const chartData: ChartModel = {
        labels: labels,
        data: aggr.map((element) => ({
          label: element.group,
          data: [element.count],
        })),
      };

      return chartData;
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  }
  // #endregion
}
