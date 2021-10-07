import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to access the content of a file included 
 * in the Assets folder.
 */
export class AssetsService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param path Method getting the content of the file (included into
   * Assets folder ) specified as parameter.
   * <usage>
   * const asset = await this.assets.getFile('assets/Test.json')
   * </usage>
   * @returns a string representing the content of the file.
   */
  async getFile(path: string): Promise<string> {
    const res = await this.http.get<string>(path).toPromise();
    return res; 
  }
}
