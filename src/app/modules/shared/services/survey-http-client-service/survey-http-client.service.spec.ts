import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { ISurvey } from 'src/app/models/isurvey';
import { URL_LOCAL_QUIZZ } from '../../constants/url-constant';
import { SurveyHttpClientService } from './survey-http-client.service';



describe('HttpClientService', () => {

  let service: SurveyHttpClientService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new SurveyHttpClientService(httpClientSpy);
  });


  it('should be created the service', () => {
    expect(service).toBeTruthy();
  });

 

  it('one call of GET method httpCLientSerivce', () => {
    //GIVEN
    const surveys: ISurvey[] = [{id: '1', name: 'survey1' },
     {id: '2', name: 'survey2' },
      {id: '3', name: 'survey3' },];

    httpClientSpy.get.and.returnValue(defer(() => surveys));

    //WHEN
    service.getSurveysHttp(URL_LOCAL_QUIZZ + '/surveys');
    //THEN
    expect(service.getSurveysHttp.call.length).withContext('one call').toBe(1);
    

  });
});
