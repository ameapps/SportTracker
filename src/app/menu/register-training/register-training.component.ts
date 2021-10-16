import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RegisterTrainingService } from 'src/services/App/Register Training/register-training.service';



@Component({
  selector: 'app-register-training',
  templateUrl: './register-training.component.html',
  styleUrls: ['./register-training.component.scss'],
})
export class RegisterTrainingComponent implements OnInit {
  toppings = new FormControl(); 

  trainings: string[] = [];

  isTimerEnabled = false; 

  constructor(private componentService: RegisterTrainingService) { 
    this.asyncConstructor();
  }

  ngOnInit() {}

  async asyncConstructor() {
    /* Getting trainings from assets */
    const trainigs = await this.componentService.getTrainigs();
    this.trainings = JSON.parse(trainigs);
  }

  //#region checks

  /**
   * Method to set as clicked/unclicked the checkbox
   */
  startTimeClicked() {
    this.isTimerEnabled = !this.isTimerEnabled;
  }
  //#endregion

  //#region listeners

  /**
   * Listener for time events from chrono-timer component
   * @param event stirng representing the time emitted 
   */
  definedTime(event) {
    this.componentService.definedTime = event;
    console.log('register-trainig defined time')
  }

  //#endregion
}
