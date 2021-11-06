import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/services/Helpers/camera/photo.service';

@Component({
  selector: 'app-rt-step3',
  templateUrl: './rt-step3.component.html',
  styleUrls: ['./rt-step3.component.scss'],
})
export class RtStep3Component implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
