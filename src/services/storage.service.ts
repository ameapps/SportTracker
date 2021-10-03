import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})

/**
 * Class to allow accessing ionic
 * capacitor storage functionality.
 */
export class StorageService {

  constructor() { }

  /** Method setting the specified key using the specifie value.  */
  async set(key: string, value: any): Promise<void> {
    await Storage.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  /** Method getting the object from the storage having the given key. */
  async get(key: string): Promise<any> {
    return await Storage.get({ key: key });
  }

  /** Method deleting the object from the storage having the given key. */
  async remove(key: string): Promise<void> {
    await Storage.remove({
      key: key,
    });
  }
}
