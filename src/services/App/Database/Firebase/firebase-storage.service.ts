import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { IDatabase } from 'src/services/Interfaces/Database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService implements IDatabase{

  constructor() { }

  /**Prototype to get all elements associated to the specified entity */
  GetAllItems(datatype: DbDataType): object[] {
    throw new Error('Method not implemented.');
  }
}
