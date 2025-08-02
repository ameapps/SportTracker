import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { RegisterTrainingService } from 'src/services/App/Register Training/register-training.service';
import { TimeSharedService } from 'src/services/App/Time/time-shared.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnChanges, OnDestroy {

  CAN_USE_TIMEPICKER = false;

  // CHRONO TIME PICKER
  @Input() chronoType: string = "";
  @Output() definedTime = new EventEmitter();
  @Output() actualTime = new EventEmitter<string>();

  // DIGITAL CLICK COMPONENT
  @Input() hours: number | string = '00';
  @Input() minutes: number | string = '00';
  @Input() seconds: number | string = '00';
  @Input() canStartCountdown: boolean = true;

  // THIS COMPONENT

  @Output() timeExpired = new EventEmitter<any>();

  constructor(public timeShared: TimeSharedService,
    public componentService: RegisterTrainingService,
    public customTrainingService: CustomTrainingService,
    ) {

  }

  ngOnDestroy(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {
  }

  //#region methods
  onDefinedTime(event){
    this.timeShared.canShowTimer = true;
    this.componentService.stepsComplete[1] = false;
    this.definedTime.emit(event);
  }

  onTimeDefined(time: string) {
    this.hours = this.setHours(time);
    this.minutes = this.setMinutes(time);
    this.seconds = this.setSeconds(time);
    this.timeShared.canShowTimer = true;

    this.actualTime.emit(time);
  }

  onTimeExpired(event) {
    this.timeShared.canShowTimer = false;
    /* Emitting expired time */
    const obj = {
      timeExpired : event.time,
      atTime: new Date()
    };
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
