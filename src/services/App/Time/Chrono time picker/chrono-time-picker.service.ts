import { Injectable } from '@angular/core';
import { StringHelper } from 'src/helpers/StringHelper';
import { PlatformService } from 'src/services/Services/platform/platform.service';

@Injectable({
  providedIn: 'root'
})
export class ChronoTimePickerService {


  constructor(public platformService: PlatformService) { }
  
  //#region calc milliseconds

  /**Method calcolating the millisec time of the timepicker. */
  calcMillisec(hour: number, minutes: number): number {
    return this.calcHourMillisec(hour) + this.calcMinutesMillisec(minutes); 
  }


  /**Method transforming the specified minutes in its corrisponding milliseconds */
  calcMinutesMillisec(minutes: number): number {
    const ONE_SECOND = 1000; 
    const MINUTE_SECONDS = 60;
    return minutes * MINUTE_SECONDS * ONE_SECOND; 
  }

  /**Method transforming the specified hours in its corrisponding milliseconds */
  calcHourMillisec(hour: number): number {
    return this.calcMinutesMillisec(this.hourAsMinutes(hour));
  }

  /**Method transforming the specified hours in its corrisponding minutes */
  hourAsMinutes(hour: number): number {
    const HOUR_MINUTES = 60;
    return hour * HOUR_MINUTES;
  }

  //#endregion

  //#region calcTime

  /**Method calcolating the equivalent time from specified milliseconds */
  millisecAsTime(millisec: number): string {
    const hours = StringHelper.msToTime(millisec);
    return hours;
  }
  



  //#endregion

}
