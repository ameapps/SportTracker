import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
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
  @Input() hours: number | string = '00';
  @Input() minutes: number | string = '00';
  @Input() seconds: number | string = '00';

  // THIS COMPONENT
  canShowTimer: boolean = false;
  @Output() timeExpired = new EventEmitter<object>();



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

  onTimeDefined(time: string) {
    this.hours = this.setHours(time);
    this.minutes = this.setMinutes(time);
    this.seconds = this.setSeconds(time);

    this.canShowTimer = true;

    this.actualTime.emit(time);
  }

  onTimeExpired(event) {
    this.canShowTimer = false;
    /* Emitting expired time */
    const obj = {
      timeExpired : `${this.hours}:${this.minutes}:${this.seconds}`,
      atTime: new Date()
    };
    console.log('fire time exored for some reason')
    this.timeExpired.emit(obj)
  }


  setSeconds(time: string): string | number {
    return time.split(':')[2];
  }

  setMinutes(time: string): string | number {
    return time.split(':')[1];
  }

  setHours(time: string): string | number {
    return time.split(':')[0];
  }


  //#endregion

}
