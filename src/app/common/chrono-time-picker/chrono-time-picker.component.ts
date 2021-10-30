import { Component, Input, OnChanges, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chrono-time-picker',
  templateUrl: './chrono-time-picker.component.html',
  styleUrls: ['./chrono-time-picker.component.scss'],
})
export class ChronoTimePickerComponent implements OnInit, OnChanges {

  //#region fields
  timepickerText: string = "Click to open timepicker!";

  inputClockClick = false;

  time = '';

  @Output() definedTime = new EventEmitter();

  //#endregion

  @Input() chronoType: string = "";

  constructor() {}
   
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["chronoType"]) {
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

    const timetext = this.getTimeText(value);
    this.timepickerText = timetext;
  }

  /**Method getting the string to show when the user selects a time from the timepicker */
  getTimeText(value: any): string {
    const hour = this.fixHour(value);
    const minutes = value.split(':')[1];
    const hourword = parseInt(hour) > 1 ? 'hours' : 'hour';
    const minutesword = parseInt(hour) > 1 ? 'minutes' : 'minute';
    let timetext = `You have selected ${hour} ${hourword} and ${minutes} ${minutesword}`;
    return timetext;
  }


  /**Method to remove the '0' if its the first char */
  private fixHour(value: string) {
    let hour = value.split(':')[0];
    const isFirstZero = value.charAt(0) === '0';
    if (isFirstZero) {
      hour = hour.replace('0', '');
    }
    return hour;
  }
  //#endregion


  //#endregion

}
