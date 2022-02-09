import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppPage } from 'e2e/src/app.po';
import { ApiHelper } from 'src/helpers/ApiHelper';
import { AppPages } from 'src/Models/appPages';
import { InitialConfigurationService } from 'src/services/App/Initial Configuration/initial-configuration.service';
import { AssetsService } from 'src/services/Services/assets/assets.service';
import { StorageService } from 'src/services/Services/storage/storage.service';
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
    private config: InitialConfigurationService,
    private http: HttpClient
    ) 
  {
    this.asyncConstructor();

  }

  async asyncConstructor() {

    await this.testIonicStorage();

    const menuSer = await this.config.getMenuItems();
    const menu = JSON.parse(menuSer);

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
