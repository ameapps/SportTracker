import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';
import { StringHelper } from 'src/helpers/StringHelper';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { CycletteService } from 'src/services/App/Custom training/cyclette/cyclette.service';
import { TapisroulantService } from 'src/services/App/Custom training/tapis roulant/tapisroulant.service';
import { RegisterTrainingService } from 'src/services/App/Register Training/register-training.service';



@Component({
  selector: 'app-register-training',
  templateUrl: './register-training.component.html',
  styleUrls: ['./register-training.component.scss'],
})
export class RegisterTrainingComponent implements OnInit {
  toppings = new FormControl(); 

  trainings: string[] = [];
  struments: string[] = [];
  stepsName: string[] = [];

  isTimerEnabled = false; 

  clicked: boolean[] = [];
  
  completedTrainings: object[] = [];


  //#region stepper
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stepperPage = 0;
  preWeightTimes = '';
  //#endregion


  expiredTime: object;
  canShowNextTrain = false;


  savedTrainings: object[] = [];  
  
  @ViewChild(MatStepper) stepper: MatStepper ;

  /**Method setting the actual step as complete.
   * NOT WORKING */
  complete() {
      this.stepper.selected.completed = true;
      this.stepper.selected.editable = false;
      console.log('completed fired')
      console.log(this.stepper)
      this.stepper.next();
  }

  constructor(
    private componentService: RegisterTrainingService, 
    private customTrainingService: CustomTrainingService,
    private tapisroulantService: TapisroulantService, 
    private cycletteService: CycletteService, 
    private _formBuilder: FormBuilder
    ) 
  { 
    this.asyncConstructor();
  }
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  async asyncConstructor() {
    /* Getting trainings from assets */
    const trainigs = await this.componentService.getTrainigs();
    this.trainings = JSON.parse(trainigs);

    const struments = await this.componentService.getStruments();
    this.struments = JSON.parse(struments);

    const stepsName = await this.componentService.getStepsName();
    this.stepsName = JSON.parse(stepsName);

    const preWeightTimes = await this.componentService.getPreWeightTimes();
    this.preWeightTimes = JSON.parse(preWeightTimes);

  }

  onTimeExpired(event) {
    this.canShowNextTrain = true;
  }

  //#region checks

  /**Method checking whether the input character is 
   * a valid one or not. 
   */
   isValidPreWeight(event: any) {
    const char = this.GetCharacter(event);
    if (!this.componentService.isPreWeightValid(char)) {
      event.preventDefault();
    }
  }

  /**Method returning the key of the event, where
   * the key is the character pressed on the 
   * keyboard from the user.
   */
  private GetCharacter(event: any) {
    return event.key;
  }

  //#endregion

  //#region listeners



  /** Method to get the emitted index of the selected items in selector component */
  saveSelectedItems(event) {
    this.componentService.selectedTrainings = event;
  }

  
  //#region another training

  AnotherTraining(event) {
    this.saveTraining();
    this.hideTimerInput();
    this.resetSelectedMenu();
    this.resetExpiredTime();
    this.hideButtons();
  }

  private hideButtons() {
    this.canShowNextTrain = false;
  }

  private hideTimerInput() {
    let el = this.LastCustomTraining();
    const asObj = Object.assign(el);
    asObj.isComplete = false;
  }

  /**Method to get the last custom training from the custom trainings list */
  private LastCustomTraining() {
    const length = this.componentService.selectedTrainings.length;
    const strument = this.componentService.selectedTrainings[length - 1];
    let el = this.customTrainingService.customTrainingsComplete[strument];
    return el;
  }

  /**Method allowing the after time items in the custom menus
   * not to appear after pressing "another training" button*/
  private resetExpiredTime() {
    this.expiredTime = null;
  }

  /**Method to save all the user input associated to the 
   * selected custom training to the database
   */
  saveTraining() {
    const id = this.getSelectedTraining();
    const data = this.getTrainingData(id);
    console.log(`Data: ${data}`);
    const obj = {
      id: id,
      type: this.getTraining(id),
      data: data
    };
    this.savedTrainings.push(obj);

  }

  /**Method getting the training type form the specified training id */
  getTraining(id: number): string {
    return this.trainings[id-1];
  }

  /**Method to get the custom training data according the specified 
   * custom tranining id. 
   * @param id: custom training id
   */
  private getTrainingData(id: number): object {
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

  /**Method getting the training now selected from the selector  */
  private getSelectedTraining() {
    return this.customTrainingService.trainingType+1;
  }

  private resetSelectedMenu() {
    this.componentService.selectedTrainings = [];
    this.clicked = [];
  }
  //#endregion



  //#endregion
}
