import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppPage } from 'e2e/src/app.po';
import { ApiHelper } from 'src/app/helpers/ApiHelper';
import { AppPages } from 'src/app/Models/appPages';
import { InitialConfigurationService } from 'src/app/services/App/Initial Configuration/initial-configuration.service';
import { AssetsService } from 'src/app/services/Services/assets/assets.service';
import { StorageService } from 'src/app/services/Services/storage/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [];
  public labels = [];
  constructor(public storage: StorageService,
    public assets: AssetsService,
    public config: InitialConfigurationService,
    public http: HttpClient
    )
  {
    this.asyncConstructor();

  }

  async asyncConstructor() {
    const menuSer = await this.config.getMenuItems();
    const menu = JSON.parse(menuSer);
    console.log('Menu items:', menu);
    menu.forEach(element => {
      const page = new AppPages(element.name, element.url, element.icon);
      this.appPages.push(page)
    });
  }
}
