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
    const tapis = await this.getStrumentsMenu();
    this.speeds = JSON.parse(tapis).speeds;
  }


  async getStrumentsMenu() : Promise<string> {
    const struments = await this.assets.getFile('assets/struments-menu-tapisRoulant.json');
    return JSON.stringify(struments);
  }

  ngOnInit() {}

  optionClick() {
    this.setCyclette();
  }

  /**Method setting the tapis roulant submenu completeness status */
  setCyclette() {
    let val = 
      this.componentService.customTrainingsComplete
        .filter(x => x['training'] === 'Tapis roulant')[0];
    val['isComplete'] = true;
  }

}
