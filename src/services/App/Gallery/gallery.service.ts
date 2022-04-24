import { Injectable } from '@angular/core';
import { DbType } from 'src/services/Enums/DbType';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { DatabaseService } from '../Database/database.service';
import { Photo } from 'src/Models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  photos: Photo[] = [];

  constructor(private databaseService: DatabaseService) {
    this.asyncConstructor();
  }

  async asyncConstructor() {
    this.photos = await this.getGalleryPhotos(DbType.FIREBASE);
  }

  /**
   * Method getting the photoes to show in gallery.
   * @returns 
   */
  public async getGalleryPhotos(dbType: DbType): Promise<Photo[]> {
    let photoes:Photo[] = [];
    switch (dbType) {
      case DbType.IONIC_STORAGE:
        photoes = await this.databaseService.getAllItems(
          DbType.IONIC_STORAGE,
          DbDataType.GALLERY
        ) as Photo[];        
        break;
      case DbType.FIREBASE:
        photoes = await this.databaseService.getAllItems(
          DbType.FIREBASE,
          DbDataType.GALLERY
        ) as Photo[];
        break;
      default:
        photoes = await this.databaseService.getAllItems(
          DbType.FIREBASE,
          DbDataType.GALLERY
        ) as Photo[];
        break;
    }
    return photoes;
  }
}
