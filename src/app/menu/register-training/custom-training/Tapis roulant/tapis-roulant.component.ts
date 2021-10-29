import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';

@Component({
  selector: 'app-tapis-roulant',
  templateUrl: './tapis-roulant.component.html',
  styleUrls: ['./tapis-roulant.component.scss'],
})
export class TapisRoulantComponent implements OnInit {

  speeds: string[] = [];
  choosenSpeed = '';
  
  constructor(private assets: AssetsService, 
    private componentService: CustomTrainingService) { 
    this.asyncConstructor();
  }


  async asyncConstructor() {
    const tapis = await this.getSubmenu();
    this.speeds = JSON.parse(tapis).speeds;
  }

  //#region getters

  async getSubmenu() : Promise<string> {
    const struments = await this.assets.getFile('assets/struments-menu-tapisRoulant.json');
    return JSON.stringify(struments);
  }

  //#endregion


  ngOnInit() {}

  optionClick() {
    if (this.isSubmenuComplete()) {
      this.setTapisroulant();
    }
  }

  /**Method setting the tapis roulant submenu completeness status */
  setTapisroulant() {
    let val = 
      this.componentService.customTrainingsComplete
        .filter(x => x['training'] === 'Tapis roulant')[0];
    val['isComplete'] = true;
  }

  //#region checks
  isSubmenuComplete() {
    return this.choosenSpeed != null;
  }
  //#endregion
}
