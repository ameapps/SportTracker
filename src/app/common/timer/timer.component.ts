import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnChanges {

  hours = 0;
  minutes = 0;
  seconds = 0; 
  tenths = 0;

  @Input() leftTime: string;
   
  constructor() { 

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["leftTime"]) {
      if (changes["leftTime"].currentValue != null) {
        console.log('leftTime: ' + this.leftTime)
        this.setViewTimer();
      }
    }
  }

  ngOnInit() {
  }

  /**
   * Method to set the timer when an input stir
   */
  setViewTimer() {
    if (this.isValidTime()) {
      this.mapInputWord();    
    }
  }

//#region to move in service

  /**
   * Method checking whether the
   *  input string is a valid time or not.
   */
   isValidTime(): boolean {
    return true;
  }

  /**
   * Method getting the info from the input
   * string and setting the timer varables.
   */
  mapInputWord(){
    const tokens = this.leftTime.split(':');
  }

  //#endregion 


}
