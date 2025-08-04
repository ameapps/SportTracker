/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { DatabaseService } from 'src/app/services/App/Database/database.service';
import { RegisterTrainingService } from 'src/app/services/App/Register Training/register-training.service';
import { DbEntities } from 'src/app/services/Enums/DbEntitities';
import { DbType } from 'src/app/services/Enums/DbType';
import { PhotoService } from 'src/app/services/Services/camera/photo.service';

@Component({
  selector: 'app-rt-step3',
  templateUrl: './rt-step3.component.html',
  styleUrls: ['./rt-step3.component.scss'],
})
export class RtStep3Component implements OnInit {

  gallery: any[] = [];

  constructor(public photoService: PhotoService,
    public databaseService: DatabaseService,
    public registerTrainingService: RegisterTrainingService) { }

  asyncConstructor() {
  }

  ngOnInit() {}

  async takePhoto() {
    console.log('takePhoto()')
    const photo: Photo = await this.photoService.shotPhoto();
    const savedImageFile = await this.photoService.savePicture(photo);
    const key = DbEntities[DbEntities.PHOTO_STORAGE];

    // saving the photo
    console.log('Saving photo...');
    await this.photoService.savePhoto(savedImageFile, key);
    const photos = await this.photoService.loadSaved();

    // saving training data
    console.log('Saving training data...');
    const savedTrainings = await this.registerTrainingService.saveTraining();
    await this.databaseService.saveTrainingData(DbType.FIREBASE, savedTrainings);

    this.registerTrainingService.stepsComplete[2] = true;
  }
}
