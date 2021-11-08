import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DbEntities } from 'src/services/Enums/DbEntitities';
import { StorageService } from 'src/services/Helpers/storage/storage.service';
import { IDatabase } from 'src/services/Interfaces/Database';

@Injectable({
  providedIn: 'root'
})
export class IonicStorageService implements IDatabase {

  constructor(private storage: StorageService) { }

  /**Prototype to get all elements associated to the specified entity */
  async GetAllItems(datatype: DbDataType): Promise<object[]> {
    let items = null;
    switch (datatype) {
      case DbDataType.GALLERY:
        console.log('fire')
        const key: string = DbEntities[DbEntities.PHOTO_STORAGE];
        items = await this.storage.get(key);
        break;
      default:
        break;
    }
    return items;
  }
}
