import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-training',
  templateUrl: './custom-training.component.html',
  styleUrls: ['./custom-training.component.scss'],
})
export class CustomTrainingComponent implements OnInit, OnChanges {

  //#region fields
  @Input() trainingTypes: string[];
  

  @Input() trainingType: string;
  //#endregion

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes["trainingTypes"]) {
      console.log('fire');
      console.log(changes["trainingTypes"].currentValue)
    }
  }

  ngOnInit() {}

}
