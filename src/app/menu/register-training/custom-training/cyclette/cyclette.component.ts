import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { CycletteService } from 'src/services/App/Custom training/cyclette/cyclette.service';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';

@Component({
  selector: 'app-cyclette',
  templateUrl: './cyclette.component.html',
  styleUrls: ['./cyclette.component.scss'],
})
export class CycletteComponent implements OnInit, OnChanges, OnDestroy {

  resistances: object[];
  legsPositions: object[];

  @Input() expiredTime;
  @Output() timeExpired = new EventEmitter();

  // CycletteService

  constructor(private componentService: CycletteService,
    private customTrainingService: CustomTrainingService) { 
    this.asyncConstructor()
  }


  ngOnDestroy(): void {

    this.componentService.resetValues();

    console.log('cyclette destroyed');
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
    let val = 
      this.customTrainingService.customTrainingsComplete
        .filter(x => x['training'] === 'Cyclette')[0];
    val['isComplete'] = true;
    console.log('fire custom training')
    console.log(this.customTrainingService.customTrainingsComplete)
  }

  //#region checks
  isSubmenuComplete(): boolean {
    return this.componentService.choosenResistance != null && this.componentService.choosenPosition != null; 
  }
  //#endregion

  //#region timer component

  /**
   * Listener for time events from chrono-timer component
   * @param event stirng representing the time emitted 
   */
   definedTime(event) {
    this.customTrainingService.definedTime = event;
  }

  actualTime(time: string){
  }

  
  /**Method managing what happen when the timer is expired */ 
  onExpiredTimer(event) {
    this.expiredTime = event;

    this.componentService.canConsumeKcalShow = true;
    this.componentService.canShowNextTrain = true;
    this.customTrainingService.definedTime = event.timeExpired;

    const millisec = this.componentService.getTrainingMillisec(this.customTrainingService.definedTime);
    this.componentService.consumedKcal = this.componentService.estimateKcalConsume(millisec);

    this.timeExpired.emit(event);
  }

  //#endregion

  ngOnInit() {}

}
