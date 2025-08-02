import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSharedService {

  canShowTimer: boolean = true;

  timepickerText: string = '';

  constructor() { }

}
