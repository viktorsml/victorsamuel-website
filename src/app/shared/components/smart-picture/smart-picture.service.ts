import objectFitImages from 'object-fit-images';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartPictureService {
  private _isInitialized: boolean = false;

  public initializeSmartPictureService() {
    if (!this._isInitialized) {
      objectFitImages('img.fit-image');
      this._isInitialized = true;
    }
  }
}
