/* eslint-disable @typescript-eslint/ban-types */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomTrainingService } from 'src/app/services/App/Custom training/custom-training.service';

@Component({
  selector: 'app-custom-training',
  templateUrl: './custom-training.component.html',
  styleUrls: ['./custom-training.component.scss'],
})
export class CustomTrainingComponent implements OnInit, OnChanges {

  //#region fields
  @Input() trainingTypes: string[];

  @Input() trainingType: number;

  @Input() expiredTime: object;

  @Output() timeExpired = new EventEmitter();

  strumentsMenu: string[] = [];
  //#endregion

  constructor(public componentService: CustomTrainingService) {
    this.asyncConstructor();
  }

  async asyncConstructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trainingTypes']) {
    }

    if (changes['trainingType']) {
      this.componentService.trainingType = this.trainingType;
    }
  }

  onTimeExpired(event) {
    this.timeExpired.emit(event);
  }

  ngOnInit() {}

}
