import { Injectable } from '@angular/core';
import { ILoadedService } from './iloaded-service';


@Injectable({
  providedIn: 'root'
})
export class LoadedService implements ILoadedService{
  private _loaded: boolean = false;

  constructor() {
   }

 public get getLoaded(): boolean {
    return this._loaded;
  }


  public isLoaded(): boolean {
    return this._loaded = true;
  }

  public isNotLoaded(): boolean {
    return this._loaded = false;
  }
}
