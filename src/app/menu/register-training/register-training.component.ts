/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
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



  isTimerEnabled = false;

  completedTrainings: object[] = [];


  //#region stepper
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stepperPage = 0;
  preWeightTimes = '';
  //#endregion

  @ViewChild(MatStepper) stepper: MatStepper;

  /**Method setting the actual step as complete.
   * NOT WORKING */
  complete() {
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    console.log('completed fired');
    console.log(this.stepper);
    this.stepper.next();
  }

  constructor(
    private componentService: RegisterTrainingService,
    private customTrainingService: CustomTrainingService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.asyncConstructor();
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  async asyncConstructor() {
    /* Getting trainings from assets */
    const trainigs = await this.componentService.getTrainigs();
    this.componentService.trainings = JSON.parse(trainigs);

    const struments = await this.componentService.getStruments();
    this.componentService.struments = JSON.parse(struments);

    const stepsName = await this.componentService.getStepsName();
    this.componentService.stepsName = JSON.parse(stepsName);

    const preWeightTimes = await this.componentService.getPreWeightTimes();
    this.preWeightTimes = JSON.parse(preWeightTimes);

  }

  onTimeExpired(event) {
    this.componentService.stepsComplete[1] = true;
  }

  //#region checks

  /**Method checking whether the input character is
   * a valid one or not.
   */
  isValidPreWeight(event: any) {
    const char = this.getCharacter(event);
    if (!this.componentService.isPreWeightValid(char)) {
      event.preventDefault();
    }
  }

  /**Method returning the key of the event, where
   * the key is the character pressed on the
   * keyboard from the user.
   */
  private getCharacter(event: any) {
    return event.key;
  }

  //#endregion

  //#region listeners

  /**Method rooting to the "Gallery" page */
  goToGallery() {
    // location.href = "menu/gallery";
    this.router.navigate(['/menu/gallery']).then(() => {
      window.location.reload();
    });;
  }

  /**Method rooting to the "Report" page */
  goToReport() {
    // location.href = "menu/report";
    this.router.navigate(['/menu/report']).then(() => {
      window.location.reload();
    });;
  }

  /** Method to get the emitted index of the selected items in selector component */
  saveSelectedItems(event) {
    this.componentService.selectedTrainings = event;
  }


  //#region another training

  anotherTraining(event) {
    this.componentService.saveTraining();
    this.componentService.hideTimerInput();
    this.componentService.resetSelectedMenu();
    this.componentService.resetExpiredTime();
    this.componentService.hideButtons();
  }

  //#endregion

  //#endregion
}
