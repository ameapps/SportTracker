import { computeDecimalDigest } from "@angular/compiler/src/i18n/digest";
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { StringHelper } from "src/app/helpers/StringHelper";
import { ChronoTimePickerService } from "src/services/App/Time/Chrono time picker/chrono-time-picker.service";
import { TimeSharedService } from "src/services/App/Time/time-shared.service";
import { StorageService } from "src/services/Services/storage/storage.service";
import { Plugins } from '@capacitor/core';
import { Dialog } from '@capacitor/dialog';
import { RegisterTrainingService } from "src/services/App/Register Training/register-training.service";

@Component({
  selector: 'app-chrono-time-picker',
  templateUrl: './chrono-time-picker.component.html',
  styleUrls: ['./chrono-time-picker.component.scss'],
})
export class ChronoTimePickerComponent implements OnInit, OnChanges, OnDestroy {

  //#region fields
  timepickerText = 'Click to open timepicker!';
  inputClockClick = false;

  time = '';

  @Output() definedTime = new EventEmitter();
  @Output() actualTime = new EventEmitter<string>();
  @Output() timeExpired = new EventEmitter<any>();

  @Input() canCountdownStart = true;

  //#endregion

  @Input() chronoType: string = "";

  hour = '0';
  minutes = '0';
  seconds = '0';
  totalTime = '0';

  intervalTimer: any;

  constructor(
    public timeShared: TimeSharedService, // Da tenere!
    public storage: StorageService,       // Da tenere!
    public chronoService: ChronoTimePickerService) { }

  ngOnDestroy(): void {
    clearInterval(this.intervalTimer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["chronoType"]) {
      this.chronoType = changes["chronoType"].currentValue;
    }
  }

  ngOnInit() { }

  //#region  checks

  /**
   * Method checking whether the timepicker to
   * @returns a boolean condition
   */
  public isBasic(): boolean {
    return this.chronoType === 'basic';
  }

  /**
   * Method checking whether the timepicker to show is
   * a clock close to a time setter
   * @returns a boolean condition
   */
  public isTimeClock(): boolean {
    return this.chronoType === 'time-clock';
  }

  /**
   * Method checking whether the timepicker to show is
   * a clock close to an input element
   * @returns a boolean condition
   */
  public isInputClock(): boolean {
    return this.chronoType === 'input-clock';
  }
  //#endregion

  /**
   * Click event listener over input click element.
   */
  public InputClockClicked(): void {
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
  public timeChanged(value) {
    this.time = value;
    this.definedTime.emit(value);
    this.clearTimer();

    const hour = this.fixHour(value.split(':')[0]);
    const minutes = this.fixHour(value.split(':')[1]);
    this.timepickerText = this.getTimeText(hour, minutes, null);

    this.startTimer(value);
  }

  /* Method to start the timer. */
 public async startTimer(time: string): Promise<void> {
    if (!this.canCountdownStart) {
      this.timeExpired.emit(this.getTimeExpired());
      return;
    }
    // const showAlert = async () => {
    //   await Dialog.alert({
    //     title: 'Stop',
    //     message: 'this is an error',
    //   });
    // };
    let ticks = 0;
    this.hour = this.fixHour(time.split(':')[0]);
    this.minutes = this.fixMinutes(time.split(':')[1]);
    this.totalTime = this.setTotalTime();
    let millisec: number = this.chronoService.calcMillisec(parseInt(this.hour), parseInt(this.minutes));
    const totalMillisecs = Object.assign(millisec as {});
    // Calling the timer worker
    const workerBlob = new Blob(['('+workerRunner+')(' + millisec +')']),
    workerBlobUrl = URL.createObjectURL(workerBlob),
    worker = new Worker(workerBlobUrl);
    /**Ricezione messaggio dal servizio */
    worker.onmessage = async function(event) {
      if (event.data.millisec > 0) {
        this.hour = this.fixHour(event.data.timeShared.split(':')[0]);
        this.minutes = this.fixMinutes(event.data.timeShared.split(':')[1]);
        this.seconds = this.fixMinutes(event.data.timeShared.split(':')[2]);
        this.timeShared.timepickerText = this.msToTime(event.data.millisec);
      } else {
        // Il timer è scaduto!
        this.timeShared.timepickerText = event.data.timepickerText;
        this.storage.set('has-timer-finished', true);
        if (event.data.timepickerText != null)
          this.timeExpired.emit(this.getTimeExpired());
        return;
      }

    /* Getting time from storage in case timer is not running
       on mobile, not to let timer stop in background */
       let millisec_from_db = await this.storage.get('timer');
       const has_timer_finished = !(await this.storage.get('has-timer-finished'));
       if (millisec_from_db == null || millisec_from_db.value === '') {
         this.storage.set('timer', totalMillisecs);
        }
       // Calcolo i millisecondi corretti in caso di sospensione dell'app
       /**CONTINUARE!!  */
       if (millisec_from_db.value as number <= totalMillisecs && !has_timer_finished) {
         const savedTimestamp = await this.storage.get('time-stamp');
         const offsetMs = savedTimestamp.value != null ?  Date.now() - savedTimestamp.value as number : 0;
         millisec -= offsetMs;
       } else {
         millisec = totalMillisecs;
       }

       // Calculating if the timer has finished or not
       const timer_finished = await this.storage.get('has-timer-finished');
       const hasTimerFinished = timer_finished != null && timer_finished.value as number > 0;
       // Saving the time in the ionic storage
       this.storage.set('has-timer-finished', hasTimerFinished)
       this.storage.set('timer', millisec)
       if (ticks > 0) this.storage.set('time-stamp', Date.now());
       ++ticks;
    }.bind(this);
    /**Invio messaggio al servizio */
    worker.postMessage({
      millisec: millisec
    });

    if (this.chronoService.platformService.currentPlatform !== 'browser') {
      this.startNativeTimer();
    }


  }

  /**Starting native timer using a Capacitor Background task.
   * This code will only work on android and iOS devices.
   * DA CONTINUARE!
   * DA CAPIRE PERCHE' IL CODICE DELLA DOCUMENTAZIONE NON FUNZIONA.
   * AL MOMENTO L'ESECUZIONE DI QUESTO METODO LANCIA UN'ECCEZIONE.
   */
  public startNativeTimer() {
    const { App, BackgroundTask } = Plugins;
    App.addListener('appStateChange',  async (state) => {
      if (!state.isActive) {
        // The app has become inactive. We should check if we have some work left to do, and, if so,
        // execute a background task that will allow us to finish that work before the OS
        // suspends or terminates our app:
        let taskId = BackgroundTask.beforeExit(async () => {
          // In this function We might finish an upload, let a network request
          // finish, persist some data, or perform some other task
          // Example of long task
          var start = new Date().getTime();
          for (var i = 0; i < 10; i++) {
            console.log('Long task running! ');
            setTimeout(() => {
            }, 1000);
          }
          // Must call in order to end our task otherwise
          // we risk our app being terminated, and possibly
          // being labeled as impacting battery life
          BackgroundTask.finish({
            taskId,
          });
        });
      }
    });
  }

  // #region calculating time

    /**Method calculating and building the time shown in the timer. */
    public msToTime(milliseconds: number): string {
      var ms = milliseconds % 1000;
      milliseconds = (milliseconds - ms) / 1000;
      var secs = milliseconds % 60;
      milliseconds = (milliseconds - secs) / 60;
      var mins = milliseconds % 60;
      var hrs = (milliseconds - mins) / 60;
      // Building the timer string
      return this.pad(hrs, 2) + ':' + this.pad(mins, 2) + ':' + this.pad(secs, 2) + '.' + this.pad(ms, 2);
    }

  // Pad to 2 or 3 digits, default is 2
  public pad(n, z): string {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  //#endregion

  public setTotalTime(): string {
    return `${this.hour}:${this.minutes}:${this.seconds}`
  }

  /**Method making an object containing the expired emitted time */
  public getTimeExpired(): any {
    return {
      time: this.totalTime
    };
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

    if (seconds == null) {
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

// #region worker service computeDecimalDigest

/** FUNZIONA! */
// https://gist.github.com/bemson/57dffb89ee7b28d63a29
// https://stackoverflow.com/questions/49171791/web-worker-onmessage-uncaught-syntaxerror-unexpected-token
export function workerRunner(milliseconds) {
  /**Codice del service worker */
  self.onmessage = function (event) {
    let millisec = milliseconds;
    this.intervalTimer = setInterval(() => {
      millisec -= 1000;
      const timeCalculations = {
        millisec: millisec,
        hour: -1,
        minutes: -1,
        seconds: -1,
        timeShared: '',
        timepickerText : ''
      };
      if (millisec > 0) {
        // Saving hour, minutes and seconds
        const buildtime = new Date(millisec);
        timeCalculations.hour = buildtime.getHours();
        timeCalculations.minutes = buildtime.getMinutes();
        timeCalculations.seconds = buildtime.getSeconds();
        timeCalculations.timeShared = msToTime(millisec);
      } else {
        timeCalculations.timepickerText = `Time expired!`;
        clearInterval(this.intervalTimer);
      }
      //Invio oggetto con i dati elaborati dal worker service
      self.postMessage(timeCalculations, null);
    }, 1000);
    // Ricezione messaggio da parte del worker
    self.postMessage('launched worker...', null);
  }.bind(this);

  /**Function calculating and building the time shown in the timer. */
  function msToTime(milliseconds: number): string {
    var ms = milliseconds % 1000;
    milliseconds = (milliseconds - ms) / 1000;
    var secs = milliseconds % 60;
    milliseconds = (milliseconds - secs) / 60;
    var mins = milliseconds % 60;
    var hrs = (milliseconds - mins) / 60;
    // Building the timer string
    return pad(hrs, 2) + ':' + pad(mins, 2) + ':' + pad(secs, 2) + '.' + pad(ms, 2);
  }

  function pad(n, z): string {
    z = z || 2;
    return ('00' + n).slice(-z);
  }
}


// #endregion

