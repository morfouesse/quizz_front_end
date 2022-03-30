import { Injectable } from '@angular/core';
import { IErrorSerivce } from './ierror-service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements IErrorSerivce{
  private _error: boolean = false;
  private readonly _errorMessage: string = "Une erreur est survenu, réessayer plus tard :(";

  constructor() { }

 public get getError(): boolean {
    return this._error;
  }

  public get getErrorMessage(): string {
    return this._errorMessage;
  }

  public isError(): boolean {
    return this._error = true;
  }

  public isNotError(): boolean {
    return this._error = false;
  }
}
