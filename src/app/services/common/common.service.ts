import { Injectable } from '@angular/core';
import { ApiService } from '../App/API/api.service';
import { AssetsService } from '../Services/assets/assets.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public apiService: ApiService, public assets: AssetsService) { }

  async getApiConfigs(): Promise<any> {
    try {
      //01. Requesting the firebase configuration from the API service
      this.apiService.fbCredentials = await this.assets.getFile('assets/Firebase/sport-struments.json');
    } catch (error) {
      console.error('Error setting API configs:', error);
    }
  }
}
