import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import {  } from 'stream';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit, OnChanges {

  @Input() selections: object[];
  @Input() allowedSelectionNumber: number;
  @Output() selectedItems = new EventEmitter<number[]>();

  // clicked: boolean[] = [];
  @Input() clicked: boolean[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selections"]) {
      this.selections = changes["selections"].currentValue;
      this.clicked = this.initClicked();
    }
    if (changes["selectionNumber"]) {
      this.allowedSelectionNumber = changes["selectionNumber"].currentValue;
    }

  }

  ngOnInit() {}

  /**
   * Method setting as true/false the clicked
   * image boolean state in clicked array.
   * @param index
   */
  strumentSelected(index: number) {
    console.log("strumentSelected", index, this.clicked);
    // this.clicked[index] =
    //     this.clickedNumber() < this.allowedSelectionNumber || this.isClicked(index) ?
    //       !this.clicked[index] :
    //       this.clicked[index];
    for (let i = 0; i < this.clicked.length; i++) {
      if (i !== index) {
        this.clicked[i] = false;
      }
    }
    this.clicked[index] = !this.clicked[index];

    this.selectedItems.emit(this.emitSelectedItems(index));
  }

  /** Method emitting the selected items indexes */
  emitSelectedItems(index: number): number[] {
    const indexes = this.getSelectedIndexes(index);
    // Insert some other info if necessary
    return indexes;
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

  //#region tools

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

  /* Mthod getting the number of clicked selectons */
  clickedNumber() : number {
    const clicked = this.clicked.filter( el => el === true);
    return clicked.length;
  }

  /** Method geting the indexes of selected items */
  getSelectedIndexes(index: number): number[] {
    let indexes = [];
    this.clicked.forEach((element, index) => {
      if (element === true) {
        indexes.push(index);
      }
    });
    return indexes;
  }

  //#endregion

}


