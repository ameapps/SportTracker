import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnChanges {
   
  // CHRONO TIME PICKER
  @Input() chronoType: string = "";
  @Output() definedTime = new EventEmitter();
  @Output() actualTime = new EventEmitter<string>();

  // DIGITAL CLICK COMPONENT
  @Input() hours: number | string;
  @Input() minutes: number | string;
  @Input() seconds: number | string;


  constructor(private customTrainingService: CustomTrainingService) { 

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {
  }

  //#region methods
  onDefinedTime(event){
    this.definedTime.emit(event);
  }

  onActualTime(event) {
    this.actualTime.emit(event);
  }


  //#endregion

}
