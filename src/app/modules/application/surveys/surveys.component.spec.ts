import { HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';
import { ISurvey } from 'src/app/models/isurvey';
import { SURVEYS } from '../../shared/constants/endpoints-constants';
import { URL_LOCAL_QUIZZ } from '../../shared/constants/url-constant';
import { SurveyHttpClientService } from '../../shared/services/survey-http-client-service/survey-http-client.service';
import { SurveysComponent } from './surveys.component';


describe('SurveysComponent', () => {
  let component: SurveysComponent;
  let httpClientServiceSpy: jasmine.SpyObj<SurveyHttpClientService>;


  beforeEach(() => {
    httpClientServiceSpy = jasmine.createSpyObj('HttpClientService', ['getSurveysHttp']);
   
    component = new SurveysComponent(httpClientServiceSpy);
  });

  it('expected surveys', (done: DoneFn) => {
     //GIVEN
     const surveys: ISurvey[] = [{id: '1', name: 'survey1' },
     {id: '2', name: 'survey2' },
      {id: '3', name: 'survey3' },];

    httpClientServiceSpy.getSurveysHttp.and.returnValue(defer(async()=> surveys));
    component.surveys$ = httpClientServiceSpy.getSurveysHttp(URL_LOCAL_QUIZZ + SURVEYS);

    //WHEN
    component.surveys$.subscribe({
      next: surveys => {
        expect(surveys)
          .withContext('expected surveys')
          .toEqual(surveys);
        done();
      },
      error: done.fail
    });
    expect(httpClientServiceSpy.getSurveysHttp.calls.count())
      .withContext('one call')
      .toBe(1);
  });

});