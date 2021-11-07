import { Component, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { RegisterTrainingService } from 'src/services/App/Register Training/register-training.service';
import { PhotoService } from 'src/services/Helpers/camera/photo.service';

@Component({
  selector: 'app-rt-step3',
  templateUrl: './rt-step3.component.html',
  styleUrls: ['./rt-step3.component.scss'],
})
export class RtStep3Component implements OnInit {

  gallery: object[] = [];

  constructor(private photoService: PhotoService, 
    private registerTrainingService: RegisterTrainingService) { }

  asyncConstructor() {
    
  }

  ngOnInit() {}

  async addPhotoToGallery() {
    const photo: Photo = await this.photoService.addNewToGallery();
    const savedImageFile = await this.photoService.savePicture(photo);
    this.photoService.savePhoto();
    const photos = await this.photoService.loadSaved();
    console.log(photos);
    this.registerTrainingService.stepsComplete[2] = true; 
  }

}
