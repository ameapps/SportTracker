/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { DatabaseService } from 'src/services/App/Database/database.service';
import { RegisterTrainingService } from 'src/services/App/Register Training/register-training.service';
import { DbEntities } from 'src/services/Enums/DbEntitities';
import { DbType } from 'src/services/Enums/DbType';
import { PhotoService } from 'src/services/Services/camera/photo.service';

@Component({
  selector: 'app-rt-step3',
  templateUrl: './rt-step3.component.html',
  styleUrls: ['./rt-step3.component.scss'],
})
export class RtStep3Component implements OnInit {

  gallery: object[] = [];

  constructor(private photoService: PhotoService,
    private databaseService: DatabaseService,
    private registerTrainingService: RegisterTrainingService) { }

  asyncConstructor() {
  }

  ngOnInit() {}

  async addPhotoToGallery() {
    const photo: Photo = await this.photoService.shotPhoto();
    const savedImageFile = await this.photoService.savePicture(photo);
    const key = DbEntities[DbEntities.PHOTO_STORAGE];

    /**da spostare in database */
    this.photoService.savePhoto(savedImageFile, key);
    const photos = await this.photoService.loadSaved();

    const savedTrainings = this.registerTrainingService.saveTraining();
    await this.databaseService.saveTrainingData(DbType.IONIC_STORAGE, savedTrainings);

    this.registerTrainingService.stepsComplete[2] = true;
  }


}
