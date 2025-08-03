import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public fbCredentials: any;

  constructor() {}

  /**Method POSTING the data to the specified URL using http service.  */
  upload(data: any) {}

  getGoogleCredentials() {
    throw new Error('Method not implemented.');
  }
  getFbCredentials() {
    throw new Error('Method not implemented.');
  }
}
