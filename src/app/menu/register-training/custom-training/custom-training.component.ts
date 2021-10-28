import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';

@Component({
  selector: 'app-custom-training',
  templateUrl: './custom-training.component.html',
  styleUrls: ['./custom-training.component.scss'],
})
export class CustomTrainingComponent implements OnInit, OnChanges {

  //#region fields
  @Input() trainingTypes: string[];
  
  @Input() trainingType: number;

  strumentsMenu: string[] = [];
  //#endregion

  constructor(private componentService: CustomTrainingService) {
    this.asyncConstructor();
  }

  async asyncConstructor() {
    setInterval(() => {
      // console.log( `custom-training: ${this.isMenuComplete}` )
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["trainingTypes"]) {
    }

    if (changes["trainingType"]) {
    }
  }

  ngOnInit() {}

}
