import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit, OnChanges {

  arr = [1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8];

  @Input() selections: object[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selections"]) {
      this.selections = changes["selections"].currentValue;
      console.log(this.selections)
    }
  }

  ngOnInit() {

    console.log(`Struments: ${this.selections}`)
  }

}
