import { Injectable } from '@angular/core';
import { AssetsService } from 'src/services/Services/assets/assets.service';
import { RegisterTrainingService } from '../../Register Training/register-training.service';
import { CustomTrainingService } from '../custom-training.service';

@Injectable({
  providedIn: 'root'
})
export class CycletteService {

  choosenResistance: string;
  choosenPosition: string;

  consumedKcal: number = 0;
  canConsumeKcalShow = false;
  canShowNextTrain: boolean = false;

  private registerTrainingService: RegisterTrainingService;

  constructor(private assets: AssetsService,
    private customTrainingService: CustomTrainingService) { }


  /**Method prevening this component from showing 
    the last training inserted values.  */ 
  resetValues() {
    this.choosenResistance = null;
    this.choosenPosition = null;
  }

  //#region getters

  getLegPositions(cyclette: string): object[] {
    return JSON.parse(cyclette).legsPosition;
  }

  getResistances(cyclette: string): object[] {
    return JSON.parse(cyclette).resistance;
  }

  async getSubmenu() : Promise<string> {
    const struments = await this.assets.getFile('assets/struments-menu-cyclette.json');
    return JSON.stringify(struments);
  }
  //#endregion


  //#region kcal consume
  
  /* Algorithm estimating the kcal consume after training for the specfied time */
  estimateKcalConsume(millisec: number): number {
    const HOUR_CALORIES = 672;
    const secondCalories = HOUR_CALORIES / 3600; // 0.186666
    const kcal = secondCalories * (millisec / 1000);
    return kcal;
  }

  getTrainingMillisec(expiredTime: string): number {
    const tokens = expiredTime.split(':');
    const minutes = this.getMillisecs(tokens[0], tokens[1], tokens[2] );
    return minutes;
  }

  getMillisecs(hours: string, minutes: string, seconds: string):number {
    const millisecsCalc = (parseInt(hours)*1000*60*60) + (parseInt(minutes) * 1000*60) +  (parseInt(seconds) * 1000);
    return millisecsCalc;
  }

  /**Method collecting all the data this component could get from the user */ 
  getData() {
    const obj = {
      choosenResistance: this.choosenResistance,
      choosenPosition: this.choosenPosition,
      consumedKcal: this.consumedKcal,
      definedTime: this.registerTrainingService.definedTime
    }
    return obj;
  }

  //#endregion

  public setA(registerTrainingService){
    this.registerTrainingService = registerTrainingService;
  }


}
