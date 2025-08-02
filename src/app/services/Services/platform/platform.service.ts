import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  public _currentPlatform: string;

  constructor(public platform: Platform) {
    this._currentPlatform = this.setCurrentPlatform();
  }

  isNative() {
    return this._currentPlatform === 'native';
  }
  isBrowser() {
    return this._currentPlatform === 'browser';
  }

  public get currentPlatform() {
    return this._currentPlatform;
  }

  // Are we on mobile platform? Yes if platform is ios or android, but not desktop or mobileweb, no otherwise
  public setCurrentPlatform() {
    if (
        this.platform.is('ios')
        || this.platform.is('android')
        && !( this.platform.is('desktop') || this.platform.is('mobileweb') ) ) {
      return 'mobile';
    } else {
      return 'browser';
    }
  }
}