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

  }

  ngOnInit() {
  }



}
