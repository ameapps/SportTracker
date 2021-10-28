import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StringHelper } from 'src/helpers/StringHelper';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
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
  


  //#region stepper
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stepperPage = 0;
  preWeightTimes = '';
  //#endregion

  constructor(
    private componentService: RegisterTrainingService, 
    private customTrainingService: CustomTrainingService,
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

  //#region checks

  /**
   * Method to set as clicked/unclicked the checkbox
   */
  startTimeClicked() {
    this.isTimerEnabled = !this.isTimerEnabled;
  }

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

  /**
   * Listener for time events from chrono-timer component
   * @param event stirng representing the time emitted 
   */
  definedTime(event) {
    this.componentService.definedTime = event;
    console.log('register-trainig defined time')
  }

  /** Method to get the emitted index of the selected items in selector component */
  saveSelectedItems(event) {
    this.componentService.selectedTrainings = event;
  }
  //#endregion
}
