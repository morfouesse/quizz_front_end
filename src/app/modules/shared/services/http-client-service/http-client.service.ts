import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { ISurvey } from 'src/app/models/isurvey';


 
  @Injectable({
    providedIn: 'root'
  })
  export class HttpClientService {

    private readonly httpOptions = {
      headers: new HttpHeaders(
        {
          'X-API-VERSION': '1'
        }
      )
    };
    
  
    constructor(private http: HttpClient) { }
  
    get(url: string): Observable<Array<ISurvey>> {
      // https://adrien.pessu.net/post/angular_best_practices/
      //les appels d'API ne retournent qu'une seule valeur à la fois 
      //(même si c'est un tableau, c'est quand même une valeur) donc il n'y a pas de raison
      // de souscrire à un observable pour plus d'une valeur. Il faut donc utiliser la fonction take()
      
      return this.http.get<Array<ISurvey>>(url, this.httpOptions).pipe(take(1));
    }
  
  
}
