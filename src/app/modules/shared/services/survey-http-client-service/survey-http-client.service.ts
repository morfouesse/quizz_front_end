import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, take, pipe } from 'rxjs';
import { ISurvey } from 'src/app/models/isurvey';
import { ISurveyHttpClientService } from './isurvey-http-client-service';
 
  @Injectable({
    providedIn: 'root'
  })
  export class SurveyHttpClientService implements ISurveyHttpClientService{
    private readonly httpOptions = {
      headers: new HttpHeaders(
        {
          'X-API-VERSION': '1',
        }
      )
    };
    // pour les parametre http
  /*  private readonly params = new HttpParams()
      .set('orderBy', '"$key"')
      .set('limitToFirst', "1");
  */
      
    constructor(private http: HttpClient) { }
  
  
    public getSurveysHttp(url: string): Observable<ISurvey[]> {
      return this.http.get<ISurvey[]>(url, this.httpOptions).pipe(take(1));
    }
  }
  