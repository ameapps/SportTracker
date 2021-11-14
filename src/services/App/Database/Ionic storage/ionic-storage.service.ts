import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DbEntities } from 'src/services/Enums/DbEntitities';
import { StorageService } from 'src/services/Helpers/storage/storage.service';
import { IDatabase } from 'src/services/Interfaces/Database';

import { DomSanitizer } from '@angular/platform-browser';
import { IndexedDbHelper } from 'src/helpers/IndexedDbHelper';


@Injectable({
  providedIn: 'root'
})
export class IonicStorageService implements IDatabase {

  constructor(private storage: StorageService, private sanitizer:DomSanitizer) { }

  /**Prototype to get all elements associated to the specified entity */
  async GetAllItems(datatype: DbDataType): Promise<object[]> {
    let items: object[] = [];
    switch (datatype) {
      case DbDataType.GALLERY:
        console.log('fire GetAllItems')
        const key: string = DbEntities[DbEntities.PHOTO_STORAGE];
        const el = await this.storage.get(key);
        let arr = JSON.parse(el.value);
        items = arr;

        /* VERSIONE PROMISE */
        let gottenkeys = [];
        const indexesDb = await IndexedDbHelper.openDb(key) as any;
        let saved = null;
        const keys = await IndexedDbHelper.getDbKeys(indexesDb);
        var trans = indexesDb.transaction(['folder'], "readwrite");
        var store = trans.objectStore(key);
        console.log('indexDB test');

        for (let index = 0; index < arr.length; index++) {
          let element = arr[index];

          const blob = this.convertBase64ToBlob(element.blobBase64 as string);
          let objectURLa = URL.createObjectURL(blob); 
          const imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURLa);
          arr[index].webviewPath = imageUrl;

        }

        break;
      default:
        break;
    }
    return items;
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
