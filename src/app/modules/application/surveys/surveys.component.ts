import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISurvey } from 'src/app/models/isurvey';
import { ERROR_MESSAGE } from '../../shared/constants/errors-constants';
import { HttpClientService } from '../../shared/services/http-client-service/http-client.service';

const URL: string = 'http://localhost:8081/quizz';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})

// https://angular.io/guide/lazy-loading-ngmodules#preloading
// si besoin un jour d'attendre un chargement de donné avant d'afficher une page
export class SurveysComponent implements OnInit {
  loaded: boolean = false;
  surveys: Array<ISurvey> = Array();
  error: boolean = false;
  errorMessage: string = ERROR_MESSAGE;
  

  private subscription: Subscription = new Subscription;

  constructor(
    private httpClientService: HttpClientService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.subscription.add(this.getSurveysSubcription());
  }

  //TODO: refacto into service?
  getSurveysSubcription(): Subscription {
    this.loaded = false;
    return this.httpClientService.get(URL + '/surveys')
      .subscribe({
        next: (surveys: Array<ISurvey>) => {
          console.log(surveys);
          this.surveys = surveys;
          this.loaded = true;
        },
        error: (survey: Array<ISurvey>) => {
          this.error = true;
          console.error('ERROR getSurveys ' + survey);
          
        },
      });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
