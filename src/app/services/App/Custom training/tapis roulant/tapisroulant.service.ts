import { Injectable } from '@angular/core';
import { RegisterTrainingService } from '../../Register Training/register-training.service';
import { CustomTrainingService } from '../custom-training.service';

@Injectable({
  providedIn: 'root'
})
export class TapisroulantService {

  choosenSpeed = '';
  registerTrainingService: RegisterTrainingService;

  constructor(public customTrainingService: CustomTrainingService) { }

  getData(): any {
    const obj = {
      choosenSpeed: this.choosenSpeed,
      definedTime: this.registerTrainingService.definedTime
    };
    return obj;
  }

  /**Method prevening this component from showing
    the last training inserted values.  */
  resetValues() {
    this.choosenSpeed = null;
  }

  public setA(registerTrainingService){
    this.registerTrainingService = registerTrainingService;
  }

}
