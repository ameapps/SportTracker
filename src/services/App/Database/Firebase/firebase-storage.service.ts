import { Injectable } from '@angular/core';
import { FirebaseHelper } from 'src/helpers/FirebaseHelper';
import { DbDataType } from 'src/services/Enums/DbDataType';
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

  /**Method getting the photoes from the gallery using 
   * the firebase realtime database. */
  async getGalleryItems(credentials: object): Promise<object[]> {
    const data = await FirebaseHelper.getData(credentials, 'photoes');
    const item = data[0];
    return item;
  }

  //#region getters

  /**Method getting the firebase credentials fromt he assets */
  async getCredentials() {
  const credentials = await this.assets.getFile('assets/Firebase/sportmonitoring_credentials.json');
  return JSON.parse(JSON.stringify(credentials));
}

  //#endregion
}
