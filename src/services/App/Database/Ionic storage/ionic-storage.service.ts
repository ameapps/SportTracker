import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DbEntities } from 'src/services/Enums/DbEntitities';
import { StorageService } from 'src/services/Helpers/storage/storage.service';
import { IDatabase } from 'src/services/Interfaces/Database';

import { DomSanitizer } from '@angular/platform-browser';
import { IndexedDbHelper } from 'src/helpers/IndexedDbHelper';
import { Router } from '@angular/router';


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
        console.log('fire GetAllItems')
        
        let allPhotos = await this.getPhotoes();

        let arr: any = allPhotos;
        items = arr;

        let gottenkeys = [];
        for (let index = 0; index < allPhotos.length; index++) {
          let element = allPhotos[index];
          const blob = this.convertBase64ToBlob(element.blobBase64 as string);
          let objectURLa = URL.createObjectURL(blob);
          const imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURLa);
          allPhotos[index].webviewPath = imageUrl;
        }


        break;
      default:
        break;
    }
    return items;
  }


  private async getPhotoes() {
    let photoes = null;
    if (this.isRunningOnlocalhost()) {
      photoes = await this.imagesFromStorage();
    }
    else {
      photoes = await this.IndexedDbAllPhotoes(); 
      // MODIFICARE I CAMPI PER UNIFORMARLI A QUELLI DI STORAGE.
      // content -> blobBase64
      const keys = Object.keys(photoes[0]);
      var formatted = this.asFromStorae(photoes, keys);
      photoes = formatted;
    }
    return photoes;
  }

  /**Method chainging the specified object fielts renaming them
   * making the object similiar to a storage object. */
  private asFromStorae(photoes: any, keys: string[]) {
    const buildedObjs: object[] = [];
    let builded = new Object(); 
    for (let index = 0; index < photoes.length; index++) {
      const photo = photoes[index];
      keys.forEach(key => {
        switch (key) {
          case 'content':
            builded['blobBase64'] = `data:image/png;base64,${photo[key]}`;
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

  private async imagesFromStorage() {
    const key: string = DbEntities[DbEntities.PHOTO_STORAGE];
    const el = await this.storage.get(key);
    let arr = JSON.parse(el.value);
    return arr;
  }

  private isRunningOnlocalhost() {
    let isLocalhost = false;
    if (this.getUrl().includes('localhost')) {
      isLocalhost = true;
    }
    return isLocalhost;
  }

  private getUrl(): string {
    return window.location.href;
  }

  /**Method getting all the pictures from the indexedDb 
   * when ionic storage can't get them. */
  private async IndexedDbAllPhotoes() {
    const indexesDb = await IndexedDbHelper.openDb('Disc') as any;
    const pictures = await IndexedDbHelper.AllObjectstoreElements(indexesDb, ['FileStorage']);
    return pictures;
  }

  dataURLToBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  /**
 * Convert BASE64 to BLOB
 * @param base64Image Pass Base64 image data to convert into the BLOB
 */
  private convertBase64ToBlob(base64Image: string) {
    // Split into two parts
    const parts = base64Image.split(';base64,');

    // Hold the content type
    const imageType = parts[0].split(':')[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }
}
