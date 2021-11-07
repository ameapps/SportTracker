import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TapisroulantService {

  choosenSpeed = '';

  constructor() { }

  getData(): any {
    return null;
  }
  
  /**Method prevening this component from showing 
    the last training inserted values.  */ 
  resetValues() {
    this.choosenSpeed = null;
  }

}
