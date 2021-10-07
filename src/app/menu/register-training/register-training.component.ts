import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-training',
  templateUrl: './register-training.component.html',
  styleUrls: ['./register-training.component.scss'],
})
export class RegisterTrainingComponent implements OnInit {

  constructor() { 
    console.log('davide cane')
    alert('ciao')
  }

  ngOnInit() {}

}
