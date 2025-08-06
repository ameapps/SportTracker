import { Injectable } from '@angular/core';
import { RegisterTrainingService } from '../../Register Training/register-training.service';
import { CustomTrainingService } from '../custom-training.service';
import { TapisRoulantData } from 'src/app/Models/tapis.roulant.data.model';

@Injectable({
  providedIn: 'root',
})
export class TapisroulantService {
  // Nel rispettivo service
  consumedKcal: number = 0;
  trainingMinutes: number = 0;
  choosenSpeed = '';
  registerTrainingService: RegisterTrainingService;

  constructor(public customTrainingService: CustomTrainingService) {}

  getData(): TapisRoulantData {
    const obj = {
      choosenSpeed: this.choosenSpeed,
      consumedKcal: this.consumedKcal,
      trainingMinutes: this.trainingMinutes,
    };
    return obj;
  }

  /**Method prevening this component from showing
    the last training inserted values.  */
  resetValues() {
    this.choosenSpeed = null;
  }

  public setA(registerTrainingService) {
    this.registerTrainingService = registerTrainingService;
  }
}
