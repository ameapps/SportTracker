import { Component, Input, OnChanges, EventEmitter, OnInit, Output, SimpleChanges, OnDestroy } from '@angular/core';
import { ChronoTimePickerService } from 'src/services/App/Time transforming/chrono-time-picker.service';

@Component({
  selector: 'app-chrono-time-picker',
  templateUrl: './chrono-time-picker.component.html',
  styleUrls: ['./chrono-time-picker.component.scss'],
})
export class ChronoTimePickerComponent implements OnInit, OnChanges, OnDestroy {

  //#region fields
  timepickerText: string = "Click to open timepicker!";

  inputClockClick = false;

  time = '';

  @Output() definedTime = new EventEmitter();
  @Output() actualTime = new EventEmitter<string>();
  @Output() timeExpired = new EventEmitter<object>();

  //#endregion

  @Input() chronoType: string = "";

  hour = '0';
  minutes = '0';
  seconds = '0';
  totalTime = '0';

  intervalTimer: any;

  constructor(private timeService: ChronoTimePickerService) {}

  ngOnDestroy(): void {
    clearInterval(this.intervalTimer);
  }
   
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
   * the clock widget.
   * It's triggered when 'ok' button is pressed.
   * @param value hour gotten from the widget
   */
  timeChanged(value) {
    this.time = value;
    this.definedTime.emit(value);
    this.clearTimer();

    const hour = this.fixHour(value.split(':')[0]);
    const minutes = this.fixHour(value.split(':')[1]);
    this.timepickerText = this.getTimeText(hour, minutes, null);

    this.startTimer(value);
  }

  /* Method to start the timer. */
  startTimer(time: string): void {
    this.hour = this.fixHour(time.split(':')[0]);
    this.minutes = this.fixMinutes(time.split(':')[1]);
    this.totalTime = this.setTotalTime();

    let millisec: number = this.timeService.calcMillisec(parseInt(this.hour), parseInt(this.minutes));
    this.intervalTimer = setInterval(() => {
      millisec = this.decreaseTimer(millisec);
      if (millisec > 0) {
        const buildtime = this.timeService.millisecAsTime(millisec);
        this.hour = this.fixHour(buildtime.split(':')[0]);
        this.minutes = this.fixMinutes(buildtime.split(':')[1]);
        this.seconds = this.fixMinutes(buildtime.split(':')[2]);
        this.timepickerText = this.getTimeText(this.hour, this.minutes, this.seconds);
        this.actualTime.emit(this.getTime(this.hour, this.minutes, this.seconds));
      } else {
        this.timepickerText = `Time expired!`;
        console.log('fire')
        console.log(`time: ${time}`)
        this.timeExpired.emit(this.getTimeExpired(time));
        clearInterval(this.intervalTimer);
      }

    }, 1000);
  }


  setTotalTime(): string {
    return `${this.hour}:${this.minutes}:${this.seconds}`
  }

  /**Method making an object containing the expired emitted time */
  getTimeExpired(time: string): object {
    const obj = {
      time: this.totalTime
    };
    return obj;
  }

  /**Method getting a coplete time by concatenating
   *  the seconds to the HH:MM time format. */
  private getTime(hour: string, minutes: string, seconds: string): string {
    return `${hour}:${minutes}:${seconds}`;
  }

  private decreaseTimer(millisec: number) {
    millisec -= 1000;
    return millisec;
  }

  //#endregion

  //#region timer

  //#endregion

  //#region time selected as string

  /**Method getting the string to show when the user selects a time from the timepicker */
  getTimeText(hour: any, minutes: string, seconds: string): string {
    const hourword = parseInt(hour) > 1 ? 'hours' : 'hour';
    const minutesword = parseInt(minutes) > 1 ? 'minutes' : 'minute';
    let timetext = null;

    if (seconds== null) {
      timetext = `You have selected ${hour} ${hourword} and ${minutes} ${minutesword}`;
    } else {
      const secondsword = parseInt(seconds) > 1 ? 'seconds' : 'second';
      timetext = `Countdown now is ${hour} ${hourword} : ${minutes} ${minutesword} : ${seconds} ${secondsword}`;
    }

    return timetext;
  }

  //#region fix times

  /**Method to remove the '0' if its the first char */
  private fixHour(hour: string) {
    const isFirstZero = hour.charAt(0) === '0';
    if (isFirstZero) {
      hour = hour.replace('0', '');
    }
    return hour;
  }

  
  /**Method to remove the '0' if its the first char */
  private fixMinutes(minutes: string) {
    const isFirstZero = minutes.charAt(0) === '0';
    if (isFirstZero) {
      minutes = minutes.replace('0', '');
    }
    return minutes;
  }
  //#endregion

  /**Method clearing the timer when the user selects another time
   * from timepicker
   */
  clearTimer() {
    if (this.intervalTimer != null) {
      clearInterval(this.intervalTimer);
    }
  }

  
  //#endregion

  //#endregion

}
