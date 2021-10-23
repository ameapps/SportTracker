import { Injectable } from '@angular/core';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterTrainingService {

  //#region fields
  definedTime = '';

  stepsComplete = [false, false, false];

  stepCheck: unknown; /* Timeout */

  //#region component fields

  before_training_weight: string = "";

  //#endregion

  //#endregion

  constructor(private assets: AssetsService) { 
    this.checkComplete();
  }

  //#region async methods

  async getTrainigs(): Promise<string> {
    const trainings = await this.assets.getFile('assets/trainings.json');
    return JSON.stringify(trainings);
  }

  async getStruments() : Promise<string> {
    const struments = await this.assets.getFile('assets/sport-struments.json');
    return JSON.stringify(struments);
  }

  async getStepsName() {
    const stepsName = await this.assets.getFile('assets/register-training-stepper.json');
    return JSON.stringify(stepsName);
  }

  //#endregion

  //#region check if steps are complete 

  /** Method always checking the state of the stepper steps */
  public checkComplete(): void {
    this.stepCheck = setInterval(() => {
      this.stepsComplete.forEach((element, index) => {
        this.isStepComplete(index);
        
        console.log(this.before_training_weight)
      });
    }, 500);
  }

  public isStepComplete(id: number): boolean
  {
    let isComplete = false;
    switch (id) {
      case 0:
        this.stepsComplete[0] = this.isStepOneComplete();
        break;
      case 1:
        this.stepsComplete[1] = this.isStepTwoComplete();
        break;
      case 2:
        this.stepsComplete[2] = this.isStepThreeComplete();
        break;
      default:
        break;
    }
    return isComplete;
  }

  /** Method checking if the step 3 is complete */
  isStepOneComplete() {
    return false;
  }

  /** Method checking if the step 2 is complete */
  isStepTwoComplete() {
    return false;
  }
  
  /** Method checking if the step 1 is complete */
  isStepThreeComplete() {
    return false;
  }

  //#endregion

}
