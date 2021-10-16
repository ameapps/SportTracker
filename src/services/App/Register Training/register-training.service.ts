import { Injectable } from '@angular/core';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterTrainingService {

  //#region fields
  definedTime = '';

  //#endregion

  constructor(private assets: AssetsService) { }

  async getTrainigs(): Promise<string> {
    console.log('ciao')
    const trainings = await this.assets.getFile('assets/trainings.json');
    return JSON.stringify(trainings);
  }
}
