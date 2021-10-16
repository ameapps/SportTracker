import { Component, Input, OnChanges, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chrono-time-picker',
  templateUrl: './chrono-time-picker.component.html',
  styleUrls: ['./chrono-time-picker.component.scss'],
})
export class ChronoTimePickerComponent implements OnInit, OnChanges {

  //#region fields

  inputClockClick = false;

  time = '';

  @Output() definedTime = new EventEmitter();

  //#endregion

  @Input() chronoType: string = "";

  constructor() {}
   
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["chronoType"]) {
      console.log('thrown')
      this.chronoType = changes["chronoType"].currentValue;
    }
  }

  ngOnInit() {}

  //#region  checks

  /**
   * Method checking whether the timepicker to 
   * @returns a boolean condition
   */
  isBasic(): boolean {
    return this.chronoType === 'basic';
  }

  /**
   * Method checking whether the timepicker to show is 
   * a clock close to a time setter
   * @returns a boolean condition 
   */
   isTimeClock(): boolean {
    return this.chronoType === 'time-clock';
  }

  /**
   * Method checking whether the timepicker to show is 
   * a clock close to an input element
   * @returns a boolean condition
   */
  isInputClock(): boolean {
    return this.chronoType === 'input-clock';
  }
  //#endregion
  
  /**
   * Click event listener over input click element.  
   */
  InputClockClicked(): void {
    this.inputClockClick = !this.inputClockClick;
  }

  //#region chrono-time-picker

  //#region subscribers

  /**
   * Event listener for a time selection from
   * the clock widget
   * @param value hour gotten from the widget
   */
  timeChanged(value) {
    this.time = value;
    this.definedTime.emit(value);
  }


  //#endregion


  //#endregion

}
