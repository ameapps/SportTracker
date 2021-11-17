import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DbEntities } from 'src/services/Enums/DbEntitities';
import { StorageService } from 'src/services/Helpers/storage/storage.service';
import { IDatabase } from 'src/services/Interfaces/Database';

import { DomSanitizer } from '@angular/platform-browser';
import { IndexedDbHelper } from 'src/helpers/IndexedDbHelper';
import { Router } from '@angular/router';
import { BlobHelper } from 'src/helpers/BlobHelper';
import { ProjectHelper } from 'src/helpers/ProjectHelper';


@Injectable({
  providedIn: 'root'
})
export class IonicStorageService implements IDatabase {

  constructor(private storage: StorageService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  /**Prototype to get all elements associated to the specified entity */
  async GetAllItems(datatype: DbDataType): Promise<object[]> {
    let items: object[] = [];
    switch (datatype) {
      case DbDataType.GALLERY:
        items = await this.getGalleryItems(items);
        break;
      default:
        break;
    }
    return items;
  }

  //#region getting images from database

  /**Method getting the photoes from the gallery using both
   * ionic storage and indexedDb. */
  private async getGalleryItems(items: object[]) {
    let allPhotos = await this.getPhotoes();
    let arr: any = allPhotos;
    items = arr;
    let gottenkeys = [];
    for (let index = 0; index < allPhotos.length; index++) {
      let element = allPhotos[index];
      const blob = BlobHelper.convertBase64ToBlob(element.blobBase64 as string);
      let objectURLa = URL.createObjectURL(blob);
      const imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURLa);
      allPhotos[index].webviewPath = imageUrl;
    }
    return items;
  }

  /**Method getting the photoes from ionic storage or indexed db depending 
   * where the webisite is executing. 
   * Localhost = ionic storage; 
   * Online = indexed Db */
  private async getPhotoes() {
    let photoes = null;
    if (ProjectHelper.isRunningOnlocalhost()) {
      photoes = await this.imagesFromStorage();
    }
    else {
      photoes = await this.imagesFromIndexedDb(photoes);
    }
    return photoes;
  }

  //#region photoes from ionic storage

  /**Method getting the images from the ionic storage ar the specified key. */
  private async imagesFromStorage() {
    const key: string = DbEntities[DbEntities.PHOTO_STORAGE];
    const el = await this.storage.get(key);
    let arr = JSON.parse(el.value);
    return arr;
  }

  //#endregion


  //#region photoes from indexed db

  /**Method getting the images from the indexed db. */
  private async imagesFromIndexedDb(photoes: any) {
    photoes = await this.IndexedDbAllPhotoes();
    const keys = Object.keys(photoes[0]);
    var formatted = this.asBlobBase64(photoes, keys);
    photoes = formatted;
    return photoes;
  }

  /**Method getting all the pictures from the indexedDb 
   * when ionic storage can't get them. */
  private async IndexedDbAllPhotoes() {
    const indexesDb = await IndexedDbHelper.openDb('Disc') as any;
    const pictures = await IndexedDbHelper.AllObjectstoreElements(indexesDb, ['FileStorage']);
    return pictures;
  }

  //#endregion

  //#endregion


  /**Method chainging the specified object fielts renaming them
   * making the object similiar to a storage object. 
   * EXAMPLE: 
   *    photoes = [{content: "bhkbfjhsbfd", "name": "a.jpg"}, {...}]
   *    keys = ["pic", "name"];
   *    var result = [{blobBase64: "data:image/png;base64,bhkbfjhsbfd", "name": "a.jpg"}, {...}]
   * */
  private asBlobBase64(photoes: any, keys: string[]) {
    const buildedObjs: object[] = [];
    let builded = new Object();
    for (let index = 0; index < photoes.length; index++) {
      const photo = photoes[index];
      keys.forEach(key => {
        switch (key) {
          case 'content':
            builded['blobBase64'] = BlobHelper.asBlob64Format(photo[key]);
            break;
          default:
            builded[key] = photo[key];
            break;
        }
      });
      buildedObjs.push(builded);
      builded = new Object();
    }

    return buildedObjs;
  }

}
