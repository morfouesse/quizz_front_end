import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISurvey } from 'src/app/models/isurvey';
import { SURVEYS } from '../../shared/constants/endpoints-constants';
import { URL_LOCAL_QUIZZ } from '../../shared/constants/url-constant';
import { SurveyHttpClientService } from '../../shared/services/survey-http-client-service/survey-http-client.service';



@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css'],

})
// good practice rxjs
// https://blog.strongbrew.io/rxjs-best-practices-in-angular/
// https://blog.angular-university.io/angular-http/

// https://angular.io/guide/lazy-loading-ngmodules#preloading
// si besoin un jour d'attendre un chargement de donné avant d'afficher une page
export class SurveysComponent implements OnInit {

  surveys$: Observable<ISurvey[]> = new Observable();

  constructor(
    private surveyHttpClientService: SurveyHttpClientService)
    {  
    }

  ngOnInit(): void {
    this.surveys$ = this.surveyHttpClientService.getSurveysHttp(URL_LOCAL_QUIZZ + SURVEYS);
  }
}
