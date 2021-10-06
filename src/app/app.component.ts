import { Component } from '@angular/core';
import { InitialConfigurationService } from 'src/services/App/initial-configuration.service';
import { AssetsService } from 'src/services/Helpers/assets/assets.service';
import { StorageService } from 'src/services/Helpers/storage/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private storage: StorageService, 
    private assets: AssetsService,
    private config: InitialConfigurationService
    ) 
  {
    this.asyncConstructor();

  }

  async asyncConstructor() {

    await this.testIonicStorage();

    const menu = await this.config.getMenuItems();
    console.log(menu);

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
