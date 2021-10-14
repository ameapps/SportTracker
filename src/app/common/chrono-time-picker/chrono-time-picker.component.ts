import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chrono-time-picker',
  templateUrl: './chrono-time-picker.component.html',
  styleUrls: ['./chrono-time-picker.component.scss'],
})
export class ChronoTimePickerComponent implements OnInit, OnChanges {

  @Input() chronoType: string = "";

  constructor() {
    console.log('ChronoTimePickerComponent')
   }
   
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["chronoType"]) {
      console.log('thrown')
      this.chronoType = changes["chronoType"].currentValue;
    }
  }

  ngOnInit() {}

  isClock(): boolean {
    console.log(`this.chronoType ${this.chronoType}`)
    return this.chronoType === 'clock';
  }

}
