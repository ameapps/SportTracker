import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DbType } from 'src/services/Enums/DbType';
import { IDatabase } from 'src/services/Interfaces/Database';
import { FirebaseStorageService } from './Firebase/firebase-storage.service';
import { IonicStorageService } from './Ionic storage/ionic-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private ionicStorageService: IonicStorageService,
    private firebaseStorageService: FirebaseStorageService
  ) { }


  /**Prototype to get all elements associated to the specified entity */
  async GetAllItems(dbType: DbType, datatype: DbDataType): Promise<object[]> {
    let datas: object[] = [];
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        datas = await this.ionicStorageService.GetAllItems(datatype);
        break;
      case DbType.FIREBASE:
        datas = await this.firebaseStorageService.GetAllItems(datatype);
        break;
      default:
        break;
    }

    return datas;
  }

  /**Method saving the shotted pictures to the ionic storage.
   Method to be called after addNewToGallery method. */
  public async savePhoto(dbType: DbType, key: string, savedImageFile: object) {
    console.log('saving photo by dbservice')

    let datas: object[] = [];
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        await this.ionicStorageService.saveElement(key, savedImageFile);
        break;
      case DbType.FIREBASE:
        datas = await this.firebaseStorageService.saveElement(key, savedImageFile);
        break;
      default:
        break;
    }

    return true;
  }


}
