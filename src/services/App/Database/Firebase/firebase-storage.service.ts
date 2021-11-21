import { Injectable } from '@angular/core';
import { FirebaseHelper } from 'src/helpers/FirebaseHelper';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DbEntities } from 'src/services/Enums/DbEntitities';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';
import { IDatabase } from 'src/services/Interfaces/Database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService implements IDatabase {

  constructor(private assets: AssetsService) {
  }

  /**Prototype to get all elements associated to the specified entity */
  async GetAllItems(datatype: DbDataType): Promise<object[]> {
    const credentials = await this.getCredentials();

    let items: object[] = [];
    switch (datatype) {
      case DbDataType.GALLERY:     
        items = await this.getGalleryItems(credentials);
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
  async saveElement(key: string, savedImageFile: object) {
    console.log('firebase photo saving')
    const credentials = await this.getCredentials();
    let data = await FirebaseHelper.getData(credentials, key) as object[];
    data = data != null ? data : [];

    FirebaseHelper.pushToChild(savedImageFile, credentials, key);
  }

  /**Method getting the photoes from the gallery using 
   * the firebase realtime database. */
  async getGalleryItems(credentials: object): Promise<object[]> {
    const key = DbEntities[DbEntities.PHOTO_STORAGE];   
    const data = await FirebaseHelper.getData(credentials, key) as object[];
    return data;
  }

  //#region getters

  /**Method getting the firebase credentials fromt he assets */
  async getCredentials() {
  const credentials = await this.assets.getFile('assets/Firebase/sportmonitoring_credentials.json');
  return JSON.parse(JSON.stringify(credentials));
}

  //#endregion
}
