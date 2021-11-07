import { Injectable } from '@angular/core';
import { CustomTrainingService } from '../custom-training.service';

@Injectable({
  providedIn: 'root'
})
export class TapisroulantService {

  choosenSpeed = '';

  constructor(private customTrainingService: CustomTrainingService) { }

  getData(): any {
    const obj = {
      choosenSpeed: this.choosenSpeed,
      definedTime: this.customTrainingService.definedTime
    }
    return obj;
  }

  /**Method prevening this component from showing 
    the last training inserted values.  */ 
  resetValues() {
    this.choosenSpeed = null;
  }

}
