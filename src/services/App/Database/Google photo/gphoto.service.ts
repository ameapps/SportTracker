import { Injectable } from '@angular/core';
import { DbDataType } from 'src/services/Enums/DbDataType';
import { IDatabase } from 'src/services/Interfaces/Database';
import { ApiHelper } from 'src/helpers/ApiHelper';
import { AssetsService } from 'src/services/Services/assets/assets.service';
import { BlobHelper } from 'src/helpers/BlobHelper';


@Injectable({
  providedIn: 'root'
})
export class GphotoService  implements IDatabase {

  ALBUM = 'https://photoslibrary.googleapis.com/v1/albums';
  UPLOAD = 'https://photoslibrary.googleapis.com/v1/uploads'; 

  constructor(public assets: AssetsService) { 
  }



  getAllItems(datatype: DbDataType) {
    this.createAlbum('ste');
  }

  async createAlbum(name: string) {
    const credentials = await this.assets.getFile('assets/Google/credentials sportmonitoring.json'); 
    const header = {
      'content-type' : 'application/json',
      'Authorization': `Bearer ${credentials['web']['client_secret']}`,
    };

    const data = {
      "album": {
        "title": "STE-ALBUM"
      }
    }

    // L'API risponde 401 (unauthorized)
    ApiHelper.post(this.ALBUM, header, data);
  }

  async upload(data: any) {
    const credentials = await this.assets.getFile('assets/Google/credentials sportmonitoring.json'); 
    const header = {
      'content-type' : 'octet-stream',
      'Authorization': `Bearer ${credentials['web']['client_secret']}`,
      'X-Goog-Upload-Content-Type': 'image/png',
      'X-Goog-Upload-Protocol': 'raw',
      'mode' : 'no-cors'      
    };

    const asBlob = BlobHelper.convertBase64ToBlob(data['blobBase64']);
    const asBinary = await BlobHelper.blobToBinary(asBlob);

    // ApiHelper.postBinary(this.UPLOAD, header, asBinary);
    // ApiHelper.postBinary('http://localhost:3000/ste', header, asBinary);


    console.log('upload')

  }


  


}
