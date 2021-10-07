import { Component } from '@angular/core';
import { AppPage } from 'e2e/src/app.po';
import { AppPages } from 'src/Models/appPages';
import { InitialConfigurationService } from 'src/services/App/initial-configuration.service';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';
import { StorageService } from 'src/services/Helpers/storage/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [];
  public labels = [];
  constructor(private storage: StorageService, 
    private assets: AssetsService,
    private config: InitialConfigurationService
    ) 
  {
    this.asyncConstructor();

  }

  async asyncConstructor() {

    await this.testIonicStorage();

    const menuSer = await this.config.getMenuItems();
    const menu = JSON.parse(menuSer);
    console.log(menu);


    menu.forEach(element => {
      const page = new AppPages(element.name, element.url, 'mail');
      this.appPages.push(page)        
    });


  }


  /**
   *Metodo che mostra come usare lo storage di ionic.
   Eliminarlo appena possibile.
   */
  private async testIonicStorage() {
    await this.storage.set('sport', 'ste');
    const res = await this.storage.get('sport');
  }
}
