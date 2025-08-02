/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { RegisterTrainingComponent } from 'src/app/menu/register-training/register-training.component';
import { AssetsService } from '../../Services/assets/assets.service';
import { RegisterTrainingService } from '../Register Training/register-training.service';
import { CycletteService } from './cyclette/cyclette.service';
import { TapisroulantService } from './tapis roulant/tapisroulant.service';

@Injectable({
  providedIn: 'root'
})
export class CustomTrainingService {

  /* This is to know if at least one custom train has been completed */
  customTrainingsComplete: any[] = [];
  trainingType: number;

  constructor(public assets: AssetsService,
  ) {
    this.asyncConstructor();

  }
  async asyncConstructor() {
    const training = JSON.parse(await this.getTrainigs());
    this.customTrainingsComplete = this.initTrainigsComplete(training);
  }

  /**Method to init "RegisterTrainingService" */
  initTrainigsComplete(training: any): any[] {
    const result = [];
    training.forEach(element => {
      result.push({
        training: element,
        isComplete: false
      });
    });
    return result;
  }


  /**Method getting the training now selected from the selector  */
  public getSelectedTraining() {
    return this.trainingType + 1;
  }

  //#region async methods

  /* Avoiding cirucular dependency with RegisterTrainingSErvice */
  async getTrainigs(): Promise<string> {
    const trainings = await this.assets.getFile('assets/trainings.json');
    return JSON.stringify(trainings);
  }

  //#endregion

}
