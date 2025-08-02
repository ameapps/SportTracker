/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { CycletteService } from 'src/services/App/Custom training/cyclette/cyclette.service';
import { RegisterTrainingService } from 'src/services/App/Register Training/register-training.service';
import { AssetsService } from 'src/services/Services/assets/assets.service';

@Component({
  selector: 'app-cyclette',
  templateUrl: './cyclette.component.html',
  styleUrls: ['./cyclette.component.scss'],
})
export class CycletteComponent implements OnInit, OnChanges, OnDestroy {

  resistances: any[];
  legsPositions: any[];

  @Input() expiredTime;
  @Output() timeExpired = new EventEmitter();

  // CycletteService

  constructor(public componentService: CycletteService,
    public registerTrainingService: RegisterTrainingService,
    public customTrainingService: CustomTrainingService) {
    this.asyncConstructor()
  }


  ngOnDestroy(): void {
    this.componentService.resetValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }



  async asyncConstructor() {
    const cyclette = await this.componentService.getSubmenu();
    this.resistances = this.componentService.getResistances(cyclette);
    this.legsPositions = this.componentService.getLegPositions(cyclette);
  }


  optionClick() {
    if (this.isSubmenuComplete()) {
      this.setCyclette();
    }
  }

  /**Method setting the tapis roulant submenu completeness status */
  setCyclette() {
    const val =
      this.customTrainingService.customTrainingsComplete
        .filter(x => x['training'] === 'Cyclette')[0];
    val['isComplete'] = true;
  }

  //#region checks
  isSubmenuComplete(): boolean {
    // this.enableSepperButtons();
    return this.componentService.choosenResistance != null && this.componentService.choosenPosition != null;
  }

  /**Method to enable the stepper navigator buttons. */
  public enableSepperButtons() {
    this.registerTrainingService.stepsComplete[1] = true;
  }

  //#endregion

  //#region timer component

  /**
   * Listener for time events from chrono-timer component
   * @param event stirng representing the time emitted 
   */
  definedTime(event) {
    this.registerTrainingService.definedTime = event;
  }

  actualTime(time: string) {
  }


  /**Method managing what happen when the timer is expired */
  onExpiredTimer(event) {
    this.expiredTime = event;

    // Calculating milliseconds from time, to estimate the consumed kcal
    const millisec = this.componentService.getTrainingMillisec(this.registerTrainingService.definedTime);
    this.componentService.consumedKcal = this.componentService.estimateKcalConsume(millisec);

    // Allowing the user to access and edit the calculated kcal value
    this.componentService.canConsumeKcalShow = true;
    this.componentService.canShowNextTrain = true;

    this.timeExpired.emit(event);
  }

  //#endregion

  ngOnInit() { }

}
