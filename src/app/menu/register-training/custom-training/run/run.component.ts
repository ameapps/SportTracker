import { Component, Input, OnInit } from '@angular/core';
import { CustomTrainingService } from 'src/services/App/Custom training/custom-training.service';
import { AssetsService } from 'src/services/Services/assets/assets.service';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss'],
})
export class RunComponent implements OnInit {

  @Input() expiredTime;

  constructor(private assets: AssetsService, 
    private componentService: CustomTrainingService) { 
      this.asyncConstructor();
    }
    
  asyncConstructor() {
    console.log('to be implemented')
  }


  ngOnInit() {}

}
