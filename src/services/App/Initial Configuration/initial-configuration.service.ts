import { Injectable } from '@angular/core';
import { AssetsService } from 'src/services/Services/assets/assets.service';

@Injectable({
  providedIn: 'root'
})
export class InitialConfigurationService {

  constructor(private assets: AssetsService) { }

  /**
   * Getting menu items from json assets
   * @returns all the items included in menu.json file.
   */
  async getMenuItems(): Promise<string>
  {
    const menuItems = await this.assets.getFile('assets/menu.json');
    return JSON.stringify(menuItems);
  }

}
