import { Injectable } from '@angular/core';
import { ApiService } from '../App/API/api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public apiService: ApiService) { }

  async setApiConfigs(): Promise<void> {
    try {
      //01. Requesting the firebase configuration from the API service
      this.apiService.fbCredentials = await this.apiService.getFbCredentials();
      //02. Requesting the google configuration from the API service
      this.apiService.googleCredentials = await this.apiService.getGoogleCredentials();
    } catch (error) {
      console.error('Error setting API configs:', error);
    }
  }
}
