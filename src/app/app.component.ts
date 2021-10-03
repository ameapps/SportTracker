import { Component } from '@angular/core';
import { AssetsService } from 'src/services/assets/assets.service';
import { StorageService } from 'src/services/storage/storage.service';
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
    private assets: AssetsService) 
  {
    this.asyncConstructor();

  }

  async asyncConstructor() {
    await this.storage.set('sport', 'ste');
    const res = await this.storage.get('sport');

    const asset = await this.assets.getFile('assets/Test.json')

    // alert(JSON.stringify(asset));
  }

}
