/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { StringHelper } from 'src/helpers/StringHelper';
import { AssetsService } from 'src/services/Services/assets/assets.service';
import { CustomTrainingService } from '../Custom training/custom-training.service';
import { CycletteService } from '../Custom training/cyclette/cyclette.service';
import { TapisroulantService } from '../Custom training/tapis roulant/tapisroulant.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterTrainingService {

  //#region fields
  definedTime = '05:00';

  stepsComplete = [false, false, false];

  repeat: unknown; /* Timeout */

  selectedTrainings: number[] = [];

  savedTrainings: object[] = [];

  //#region component fields

  beforeTrainingWeight = '';
  preWeightTime = '';

  /* field representing the custom menu complete status */
  isMenuComplete = false;

  trainings: string[] = [];
  struments: any[] = [];
  stepsName: string[] = [];

  clicked: boolean[] = [];

  expiredTime: object;

  //#endregion

  //#endregion

  constructor(public assets: AssetsService,
    public customTrainingService: CustomTrainingService,
    public tapisroulantService: TapisroulantService,
    public cycletteService: CycletteService
  ) {
    this.tapisroulantService.setA(this);
    this.cycletteService.setA(this);
    this.repeatChecks();
  }

  //#region async methods

  async getTrainigs(): Promise<string> {
    const trainings = await this.assets.getFile('assets/trainings.json');
    return JSON.stringify(trainings);
  }

  async getStruments(): Promise<string> {
    const struments = await this.assets.getFile('assets/sport-struments.json');
    return JSON.stringify(struments);
  }

  async getStepsName() {
    const stepsName = await this.assets.getFile('assets/register-training-stepper.json');
    return JSON.stringify(stepsName);
  }

  async getPreWeightTimes() {
    const preWeightTimes = await this.assets.getFile('assets/Preweight-measuement-times.json');
    return JSON.stringify(preWeightTimes);
  }

  //#endregion

  /* Method to repeat constantly some operations */
  public repeatChecks() {
    this.repeat = setInterval(() => {
      this.checkComplete();
      this.preWeightInput();
    }, 500);
  }

  //#region check if steps are complete

  /** Method always checking the state of the stepper steps */
  public checkComplete(): void {
    this.stepsComplete.forEach((element, index) => {
      this.isStepComplete(index);
    });
  }

  public isStepComplete(id: number): boolean {
    const isComplete = false;
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
    return this.beforeTrainingWeight !== '' && this.preWeightTime !== '';
  }

  /** Method checking if the step 2 is complete */
  isStepTwoComplete() {
    return this.stepsComplete[1];
  }

  /** Method checking if the step 3 is complete */
  isStepThreeComplete() {
    return this.stepsComplete[2];
  }

  //#endregion

  //#region component checks

  /**Method checking whether the input character from the user is valid or not. */
  isPreWeightValid(char: string) {
    return StringHelper.hasOnlyNumbers(char) || char == '.';
  }

  /* Method to delete the input stringh whether it's not valid. */
  preWeightInput(): void {
    const onlyNumbers =
      StringHelper.hasOnlyNumbers(this.beforeTrainingWeight) || this.beforeTrainingWeight.includes('.');
    if (!onlyNumbers) {
      this.beforeTrainingWeight = '';
    };
  }

  //#endregion

  //#region saving trainings in a local object to save next in the DB

  //#region save trainings

  /**Method to save all the user input associated to the
   * selected custom training to the database
   */
  saveTraining() {
    const id = this.customTrainingService.getSelectedTraining();
    const data = this.getTrainingData(id);
    console.log(`Data: ${data}`);
    const obj = {
      id,
      type: this.getTraining(id),
      data
    };
    this.savedTrainings.push(obj);

    return this.savedTrainings;
  }

  /**Method to get the custom training data according the specified
 * custom tranining id.
 * @param id: custom training id
 */
  public getTrainingData(id: number): object {
    let data = null;
    switch (id) {
      case 1:
        data = this.tapisroulantService.getData();
        break;
      case 2:
        data = this.cycletteService.getData();
        break;
      case 3:

        break;

      default:
        break;
    }
    return data;
  }


  /**Method getting the training type form the specified training id */
  getTraining(id: number): string {
    return this.trainings[id - 1];
  }

  //#endregion

  //#region hide time input

  public hideTimerInput() {
    const el = this.lastCustomTraining();
    const asObj = Object.assign(el);
    asObj.isComplete = false;
  }

  /**Method to get the last custom training from the custom trainings list */
  public lastCustomTraining() {
    const length = this.selectedTrainings.length;
    const strument = this.selectedTrainings[length - 1];
    const el = this.customTrainingService.customTrainingsComplete[strument];
    return el;
  }

  //#endregion

  //#region other training saving utility methods
  public resetSelectedMenu() {
    this.selectedTrainings = [];
    this.clicked = [];
  }

  /**Method allowing the after time items in the custom menus
 * not to appear after pressing "another training" button*/
  public resetExpiredTime() {
    this.expiredTime = null;
  }

  public hideButtons() {
    this.stepsComplete[1] = false;
  }

  //#endregion

  //#endregion

}
