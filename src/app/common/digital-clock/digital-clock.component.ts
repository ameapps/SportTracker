import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
})
export class DigitalClockComponent implements OnInit, OnChanges {

  @Input() hours: number | string;
  @Input() minutes: number | string;
  @Input() seconds: number | string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hours']) {
      this.hours = this.fixHour(changes["hours"].currentValue + '')
    }
    if (changes['minutes']) {
      this.minutes = this.fixMinutes(changes['minutes'].currentValue + '')
    }
    if (changes['seconds']) {
      this.seconds = this.fixSeconds(changes['seconds'].currentValue + '')
    }
  }
//#region fix time

fixSeconds(seconds: number | string): string {
  return this.fixTime(seconds);
}
fixMinutes(minutes : number | string): string  {
  return this.fixTime(minutes);
}
fixHour(hours : number | string): string  {
  return this.fixTime(hours);
}

fixTime(value: number | string): string {
  const asStr = value.toString();
  return asStr.length === 1 ? '0'+asStr : asStr;
}
//#endregion


  ngOnInit() {}

}
