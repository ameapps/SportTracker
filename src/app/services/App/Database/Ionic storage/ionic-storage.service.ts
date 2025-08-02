/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { DbDataType } from 'src/app/services/Enums/DbDataType';
import { DbEntities } from 'src/app/services/Enums/DbEntitities';
import { StorageService } from 'src/app/services/Services/storage/storage.service';
import { IDatabase } from 'src/app/services/Interfaces/Database';

import { DomSanitizer } from '@angular/platform-browser';
import { IndexedDbHelper } from 'src/app/helpers/IndexedDbHelper';
import { Router } from '@angular/router';
import { BlobHelper } from 'src/app/helpers/BlobHelper';
import { ProjectHelper } from 'src/app/helpers/ProjectHelper';


import { Storage } from '@capacitor/storage';
import { isArray } from 'util';
import { TypeofExpr } from '@angular/compiler';
import { ObjectHelper } from 'src/app/helpers/ObjectHelper';
import { AlgorithmHelper } from 'src/app/helpers/AlgorithmHelper';


@Injectable({
  providedIn: 'root'
})
export class IonicStorageService implements IDatabase {

  constructor(public storage: StorageService,
    public sanitizer: DomSanitizer,
    public router: Router
  ) { }

  /**Prototype to get all elements associated to the specified entity */
  async getAllItems(datatype: DbDataType): Promise<object[]> {
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

  /**
   * Method saving an element at the specified key
   * on the ionic storage.
   * EXAMPLE:
   *    await this.ionicStorageService.saveElement(key, savedImageFile);
   *    WHERE:
   *      key = "PHOTO_STORAGE"
   *      element = {"key": "value"}
   *    RESULT= [{..}, {..}, {..}, {"key": "value"}]
   * @param key to use for saving the object. It allows to get it back.
   * @param element element to save.
   */
  async saveElement(key: string, element: object) {
    const db = (await Storage.get({ key })).value;
    const parsed = db != null ? JSON.parse(db) : [];
    parsed.push(element);
    await this.setStorage(key, parsed);
  }

  /**
* Method sinifizing the photoes gotten from firebase.
* @param data
*/
  sanitizePhotoes(data: object[]): object[] {
    const arr: object[] = [];
    if (data != null) {
      data.forEach((element) => {
        const blob = BlobHelper.convertBase64ToBlob(element['blobBase64'] as string);
        const objectURLa = URL.createObjectURL(blob);
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURLa);
        const index = ObjectHelper.getValueKey(data, element);
        data[index]['webviewPath'] = imageUrl;
        arr.push(data[index]);
      });
    }
    return arr;
  }

  async saveTrainingData(savedTrainings: object[]) {
    const key = DbEntities[DbEntities.SAVED_TRAININGS];
    const data: object = await this.storage.get(key);
    data['value'] = data['value'] != null ? data['value'] : [];
    let highestId = AlgorithmHelper.getHighestObjValue(JSON.parse(data['value'])['value'], 'id');
    highestId = highestId === -1 ? 0 : highestId;
    savedTrainings = this.updateObjValues(savedTrainings, highestId, 'id');
    data['value'] = this.addStorageTrainings(savedTrainings, data);
    await this.storage.set(key, data);
  }

  updateObjValues(savedTrainings: object[], highestId: number, keyName): object[] {
    let shortestId = AlgorithmHelper.getShortestObjValue(savedTrainings['value'], keyName);
    shortestId = shortestId === -1 ? 0 : shortestId;
    for (const training of savedTrainings) {
      training['id'] = ++shortestId;
    }
    return savedTrainings;
  }

  public addStorageTrainings(savedTrainings: object[], data: object): object[] {
    savedTrainings.forEach(savedTraining => {
      data['value'].push(savedTraining);
    });
    return savedTrainings;
  }

  /**
   * Method setting the storage with the specified object at the
   * specified key. It manages the exception
   * 'Setting the value of 'dataURL' exceeded the quota'
   * @param key
   * @param parsed
   */
  public async setStorage(key: string, parsed: any) {
    try {
      await this.storage.set(key, parsed);
    } catch (error) {
      console.log('error');
    }
  }

  //#region getting images from database

  /**Method getting the photoes from the gallery using both
   * ionic storage and indexedDb. */
  public async getGalleryItems(items: object[]) {
    let allPhotos = null;
    try {
      allPhotos = await this.getPhotoes();
    } catch (error) {
      console.log(error)
    }
    const arr: any = allPhotos;
    items = arr;
    const gottenkeys = [];
    if (allPhotos != null) {
      allPhotos = this.sanitizePhotoes(allPhotos);
    }
    return items;
  }

  /**Method getting the photoes from ionic storage or indexed db depending
   * where the webisite is executing.
   * Localhost = ionic storage;
   * Online = indexed Db */
  public async getPhotoes() {
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
  public async imagesFromStorage() {
    const key: string = DbEntities[DbEntities.PHOTO_STORAGE];
    const el = await this.storage.get(key);
    let arr = JSON.parse(el.value);
    if (!Array.isArray(arr)) {
      arr = [arr];
    }
    return arr;
  }

  //#endregion


  //#region photoes from indexed db

  /**Method getting the images from the indexed db. */
  public async imagesFromIndexedDb(photoes: any) {
    try {
      photoes = await this.indexedDbAllPhotoes();
      const keys = Object.keys(photoes[0]);
      const formatted = this.asBlobBase64(photoes, keys);
      photoes = formatted;
    } catch (error) {
      console.log(`Could not get photoes. Error: ${error} `)
    }

    return photoes;
  }

  /**Method getting all the pictures from the indexedDb
   * when ionic storage can't get them. */
  public async indexedDbAllPhotoes() {
    const indexesDb = await IndexedDbHelper.openDb('Disc') as any;
    const pictures = await IndexedDbHelper.AllObjectstoreElements(indexesDb, ['FileStorage']);
    return pictures;
  }

  //#endregion

  //#endregion

  //#region utils

  /**Method chainging the specified object fielts renaming them
   * making the object similiar to a storage object.
   * EXAMPLE:
   *    photoes = [{content: "bhkbfjhsbfd", "name": "a.jpg"}, {...}]
   *    keys = ["pic", "name"];
   *    var result = [{blobBase64: "data:image/png;base64,bhkbfjhsbfd", "name": "a.jpg"}, {...}]
   * */
  public asBlobBase64(photoes: any, keys: string[]) {
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

  //#endregion



}
