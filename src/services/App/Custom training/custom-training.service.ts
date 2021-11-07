import { Injectable } from '@angular/core';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';
import { RegisterTrainingService } from '../Register Training/register-training.service';
import { CycletteService } from './cyclette/cyclette.service';
import { TapisroulantService } from './tapis roulant/tapisroulant.service';

@Injectable({
  providedIn: 'root'
})
export class CustomTrainingService extends RegisterTrainingService {
  
  /* This is to know if at least one custom train has been completed */
  customTrainingsComplete: object[] = [];
  trainingType: number;

  constructor(assets: AssetsService
    ) { 
    super(assets); 
    this.asyncConstructor();
  }

  async asyncConstructor() {
    const training = JSON.parse(await this.getTrainigs());
    this.customTrainingsComplete = this.initTrainigsComplete(training);
  }

  /**Method to init "trainingsComplete" */
  initTrainigsComplete(training: any): object[] {
    let result = [];
    training.forEach(element => {
      result.push({
        training: element,
        isComplete: false
      });
    });
    return result;
  }

 

}
