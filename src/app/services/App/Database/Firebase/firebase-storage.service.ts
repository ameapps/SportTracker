import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlobHelper } from 'src/app/helpers/BlobHelper';
import { FirebaseHelper } from 'src/app/helpers/FirebaseHelper';
import { ObjectHelper } from 'src/app/helpers/ObjectHelper';
// Update the import path below to the correct relative path if needed
import { DbDataType } from '../../../Enums/DbDataType';
// Update the import path below to the correct relative path if needed
import { DbEntities } from 'src/app/services/Enums/DbEntitities';
import { AssetsService } from 'src/app/services/Services/assets/assets.service';
import { IDatabase } from 'src/app/services/Interfaces/Database';
import { ApiService } from '../../API/api.service';
import { DbType } from 'src/app/services/Enums/DbType';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService implements IDatabase {
  constructor(
    public api_service: ApiService,
    public assets: AssetsService,
    public sanitizer: DomSanitizer
  ) {}

  /**Prototype to get all elements associated to the specified entity */
  async getAllItems(datatype: DbDataType): Promise<any[]> {
    const credentials =
      this.api_service.fbCredentials ??
      (await this.assets.getFile(
        'assets/Firebase/sportmonitoring_credentials.json'
      ));
    let items: any[] = [];
    switch (datatype) {
      case DbDataType.GALLERY:
        items = await this.getGalleryItems(credentials);
        break;
      case DbDataType.REPORT_FOOD_DATA:
        items = await this.getReportFoodData(credentials);
        break;
      case DbDataType.REPORT_TRAINING_DATA:
        items = await this.getReportTrainingData(credentials);
        break;
      default:
        break;
    }
    return items;
  }

  /**
   * Method saving the soecified element on firebase
   * at the specified object key.
   * @param key
   * @param savedImageFile
   * @returns
   */
  async saveElement(key: string, savedImageFile: any) {
    //01. Recupero i dati da firebase
    const credentials = await this.getFbCredentials();
    let data = (await FirebaseHelper.getData(credentials, key)) as any[];
    data = data != null ? data : [];
    //02. Inserisco i dati
    FirebaseHelper.pushToChild(savedImageFile, credentials, key);
  }

  /**Method getting the photoes from the gallery using
   * the firebase realtime database. */
  async getGalleryItems(credentials: any): Promise<any[]> {
    const key = 'PHOTO_STORAGE';
    const allPhotos = (await FirebaseHelper.getData(credentials, key)) as any[];
    console.log('FirebaseStorageService.getGalleryItems', allPhotos);
    let fixedData: any[] = [];
    if (allPhotos != null) {
      fixedData = this.sanitizePhotoes(allPhotos);
    }
    return fixedData;
  }

  /**Method getting the report food data from firebase */
  public async getReportFoodData(dbType: DbType): Promise<any[]> {
    console.log('getReportFoodData')
    try {
      const credentials =
        this.api_service.fbCredentials ??
        (await this.assets.getFile(
          'assets/Firebase/sportmonitoring_credentials.json'
        ));
      const key = 'FoodHistory';
      const foodHistory = (await FirebaseHelper.getData(
        credentials,
        key
      )) as any[];
      return foodHistory;
    } catch (error) {
      console.error('Error fetching food report data:', error);
      return [];
    }
  }

  /**
   *    Method getting the report training data from firebase.
   *    This method is used to get the training data for the report.
   *    It fetches the data from Firebase using the provided credentials.
   *    The data is then sanitized and returned as an array of objects.
   * @param dbType
   * @returns
   */
  public async getReportTrainingData(dbType: DbType): Promise<any[]> {
    try {
      const credentials =
        this.api_service.fbCredentials ??
        (await this.assets.getFile(
          'assets/Firebase/sportmonitoring_credentials.json'
        ));
      const key = 'Trainings';
      const trainingsData = (await FirebaseHelper.getData(
        credentials,
        key
      )) as any[];
      return trainingsData;
    } catch (error) {
      console.error('Error fetching training report data:', error);
      return [];
    }
  }

  /**
   * Method sinifizing the photoes gotten from firebase.
   * @param data
   */
  sanitizePhotoes(data: any[]): any[] {
    let arr: any[] = [];
    if (data != null) {
      data.forEach((element) => {
        const blob = BlobHelper.convertBase64ToBlob(
          element['blobBase64'] as string
        );
        let objectURLa = URL.createObjectURL(blob);
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURLa);
        const index = ObjectHelper.getValueKey(data, element);
        data[index]['webviewPath'] = imageUrl;
        arr.push(data[index]);
      });
    }
    return arr;
  }

  //#region getters

  /**Method getting the firebase credentials fromt he assets */
  async getFbCredentials() {
    const credentials =
      this.api_service.fbCredentials ??
      (await this.assets.getFile(
        'assets/Firebase/sportmonitoring_credentials.json'
      ));
    return JSON.parse(JSON.stringify(credentials));
  }

  //#endregion
}
