/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DbType } from 'src/services/Enums/DbType';
import { IDatabase } from 'src/services/Interfaces/Database';
import { FirebaseStorageService } from './Firebase/firebase-storage.service';
import { GphotoService } from './Google photo/gphoto.service';
import { IonicStorageService } from './Ionic storage/ionic-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private ionicStorageService: IonicStorageService,
    private firebaseStorageService: FirebaseStorageService,
    private gPhoto: GphotoService
  ) { }


  /**Prototype to get all elements associated to the specified entity */
  async getAllItems(dbType: DbType, datatype: DbDataType): Promise<object[]> {
    let datas: object[] = [];
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        datas = await this.ionicStorageService.getAllItems(datatype);
        break;
      case DbType.FIREBASE:
        datas = await this.firebaseStorageService.getAllItems(datatype);
        break;
      default:
        break;
    }

    return datas;
  }

  /**Method saving the shotted pictures to the ionic storage.
   Method to be called after addNewToGallery method. */
  public async savePhoto(dbType: DbType, key: string, savedImageFile: object) {
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        await this.ionicStorageService.saveElement(key, savedImageFile);
        break;
      case DbType.FIREBASE:
        await this.firebaseStorageService.saveElement(key, savedImageFile);
        break;
      case DbType.GPHOTO:
        // provo a vedere se riesco a creare l'album. eliminare
        await this.gPhoto.createAlbum('ste');
        await this.gPhoto.upload(savedImageFile);
        break; 
      default:
        break;
    }

    return true;
  }

  async saveTrainingData(dbType: DbType, savedTrainings: object[]) {
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        await this.ionicStorageService.saveTrainingData(savedTrainings);
        break;
      case DbType.FIREBASE:
        await this.firebaseStorageService.saveElement('ciao', savedTrainings);
        break;
      default:
        break;
    }
  }

}
