/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { DbDataType } from '../../Enums/DbDataType';
import { DbType } from '../../Enums/DbType';
import { IDatabase } from '../../Interfaces/Database';
import { FirebaseStorageService } from './Firebase/firebase-storage.service';
import { IonicStorageService } from './Ionic storage/ionic-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public ionicStorageService: IonicStorageService,
    public firebaseStorageService: FirebaseStorageService
  ) { }


  /**Prototype to get all elements associated to the specified entity */
  async getAllItems(dbType: DbType, datatype: DbDataType): Promise<any[]> {
    let datas: any[] = [];
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
  public async savePhoto(dbType: DbType, key: string, savedImageFile: any) {
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        await this.ionicStorageService.saveElement(key, savedImageFile);
        break;
      case DbType.FIREBASE:
        await this.firebaseStorageService.saveElement(key, savedImageFile);
        break;
      default:
        break;
    }

    return true;
  }

  async saveTrainingData(dbType: DbType, savedTrainings: any[]) {
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        await this.ionicStorageService.saveTrainingData(savedTrainings);
        break;
      case DbType.FIREBASE:
        await this.firebaseStorageService.saveElement('Trainings', savedTrainings);
        break;
      default:
        break;
    }
  }

  async saveFoodHistoryData(dbType: DbType, savedFoodHistory: any[]) {
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        await this.ionicStorageService.saveTrainingData(savedFoodHistory);
        break;
      case DbType.FIREBASE:
        await this.firebaseStorageService.saveElement('FoodHistory', savedFoodHistory);
        break;
      default:
        break;
    }
  }

}
