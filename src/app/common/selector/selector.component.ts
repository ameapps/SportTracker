import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit, OnChanges {

  

  @Input() selections: object[];
  @Input() selectionNumber: number[];

  clicked: boolean[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selections"]) {
      this.selections = changes["selections"].currentValue;
      this.clicked = this.initClicked();
    }
    if (changes["selectionNumber"]) {
      this.selectionNumber = changes["selectionNumber"].currentValue;
    }
    
  }

  /**
   * Method setting the clicked array, creating
   * a boolean array representing the click state
   * of each strument. By default, they will be set
   * as unclicked.
   */
  initClicked(): boolean[] {
    this.selections.forEach(strument => {
      this.clicked.push(false);
    });
    return this.clicked;
  }

  ngOnInit() {}

  /**
   * Method setting as true/false the clicked
   * image boolean state in clicked array.
   * @param index 
   */
  strumentSelected(index: number) {
    this.clicked[index] = !this.clicked[index];
  }

  /**
   * Click event manager indicating whether 
   * the strument is clicked or unclicked.
   * @param index of the struments
   * @returns true or false depending on its click state
   */
  isClicked(index: number) {
    return this.clicked[index];
  }

}
