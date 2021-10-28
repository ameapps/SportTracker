import { Component, OnInit } from '@angular/core';
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

  constructor(private assets: AssetsService) { 
    this.asyncConstructor()
  }

  
  async asyncConstructor() {
    const tapis = await this.getStrumentsMenu();
    this.resistances = JSON.parse(tapis).resistance;
    this.legsPositions = JSON.parse(tapis).legsPosition;
  }


  async getStrumentsMenu() : Promise<string> {
    const struments = await this.assets.getFile('assets/struments-menu-cyclette.json');
    console.log(struments);
    return JSON.stringify(struments);
  }

  optionClick() {
    console.log(this.choosenResistance)
  }

  ngOnInit() {}

}
