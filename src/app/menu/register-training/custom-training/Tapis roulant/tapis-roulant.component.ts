import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';

@Component({
  selector: 'app-tapis-roulant',
  templateUrl: './tapis-roulant.component.html',
  styleUrls: ['./tapis-roulant.component.scss'],
})
export class TapisRoulantComponent implements OnInit, OnChanges {

  @Input() expiredTime;
  @Output() timeExpired = new EventEmitter();

  speeds: string[] = [];
  choosenSpeed = '';

  constructor(private assets: AssetsService,
    private customTrainingService: CustomTrainingService) {
    this.asyncConstructor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["expiredTime"]) {
      const expiredTime = changes["expiredTime"].currentValue;
      if (expiredTime != null) {
        console.log(`FIRE TAPPETO TEMPO SCADUTO:  ${expiredTime}`);
      }
    }
  }


  async asyncConstructor() {
    const tapis = await this.getSubmenu();
    this.speeds = JSON.parse(tapis).speeds;
  }

  //#region getters

  async getSubmenu(): Promise<string> {
    const struments = await this.assets.getFile('assets/struments-menu-tapisRoulant.json');
    return JSON.stringify(struments);
  }

  //#endregion


  ngOnInit() { }

  optionClick() {
    if (this.isSubmenuComplete()) {
      this.setTapisroulant();
    }
  }

  /**Method setting the tapis roulant submenu completeness status */
  setTapisroulant() {
    let val =
      this.customTrainingService.customTrainingsComplete
        .filter(x => x['training'] === 'Tapis roulant')[0];
    val['isComplete'] = true;
  }

  //#region checks
  isSubmenuComplete() {
    return this.choosenSpeed != null;
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

  actualTime(time: string) {
  }


  /**Method managing what happen when the timer is expired */
  onExpiredTimer(event) {
    this.expiredTime = event;

    this.timeExpired.emit(event);
  }

  //#endregion

}
