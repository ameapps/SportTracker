import { Injectable } from '@angular/core';
import { DbType } from 'src/services/Enums/DbType';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DatabaseService } from '../Database/database.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  photos: object[] = [];

  constructor(private databaseService: DatabaseService) { 
    this.asyncConstructor();
  }

  async asyncConstructor() {
    this.photos = await this.getGalleryPhotos();
    console.log('photos')
    console.log(this.photos)
  }

  public async getGalleryPhotos(): Promise<object[]> {
    const photos = await this.databaseService.GetAllItems(
              DbType.IONIC_STORAGE, 
              DbDataType.GALLERY
        ); 
      return photos;
  }
}
