import { Component, OnInit } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';

@Component({
  selector: 'app-cyclette',
  templateUrl: './cyclette.component.html',
  styleUrls: ['./cyclette.component.scss'],
})
export class CycletteComponent implements OnInit {

  resistances: object[];
  legsPositions: object[];

  choosenResistance: string;
  choosenPosition: string;

  constructor(private assets: AssetsService, 
    private componentService: CustomTrainingService) { 
    this.asyncConstructor()
  }

  
  async asyncConstructor() {
    const cyclette = await this.getSubmenu();
    this.resistances = this.getResistances(cyclette);
    this.legsPositions = this.getLegPositions(cyclette);
  }

  //#region getters

  private getLegPositions(cyclette: string): object[] {
    return JSON.parse(cyclette).legsPosition;
  }

  private getResistances(cyclette: string): object[] {
    return JSON.parse(cyclette).resistance;
  }

  async getSubmenu() : Promise<string> {
    const struments = await this.assets.getFile('assets/struments-menu-cyclette.json');
    console.log(struments);
    return JSON.stringify(struments);
  }
  //#endregion

  optionClick() {
    if (this.isSubmenuComplete()) {
      this.setCyclette();
    }
  }

  /**Method setting the tapis roulant submenu completeness status */
  setCyclette() {
    let val = 
      this.componentService.customTrainingsComplete
        .filter(x => x['training'] === 'Cyclette')[0];
    val['isComplete'] = true;
  }

  //#region checks
  isSubmenuComplete(): boolean {
    return this.choosenResistance != null && this.choosenPosition != null; 
  }
  //#endregion

  ngOnInit() {}

}
