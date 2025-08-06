import { Injectable } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DatabaseService } from '../Database/database.service';
import { DbType } from '../../Enums/DbType';
import { FirebaseHelper } from 'src/app/helpers/FirebaseHelper';
import { ChartModel } from 'src/app/Models/chart.model';
import {
  countByGroup,
  distinct,
  groupBy,
  objectValuesToArray,
} from 'src/app/helpers/arrayHelper';
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
      // 04. Raggruppo per tipo di esercizio (es. Cyclette, Tapis roulant)
      const groupedByType = groupBy(mapped, 'type');
      // 05. Creo i dati aggregati per il grafico
      const chartData: ChartModel = {
        labels: labelsLocal, // Date in formato locale
        data: Object.entries(groupedByType).map(([type, items]) => ({
          label: type,
          data: [
            (items as any[]).reduce(
              (sum, i) => sum + (i.data.consumedKcal || 0),
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
