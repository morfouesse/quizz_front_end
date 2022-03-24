import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import { ISurvey } from 'src/app/models/isurvey';


import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {

  let service: HttpClientService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const url = 'http://localhost:8081/quizz';

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new HttpClientService(httpClientSpy);
  });


  it('should be created the service', () => {
    expect(service).toBeTruthy();
  });


  it('see number of call of GET method httpCLientSerivce', () => {
    //GIVEN
    const surveys: ISurvey[] = [{id: '1', name: 'survey1' },
     {id: '2', name: 'survey2' },
      {id: '3', name: 'survey3' },];

    httpClientSpy.get.and.returnValue(defer(() => surveys));

    //WHEN
    service.get(url + '/surveys');
    //THEN
    expect(service.get.call.length).withContext('one call').toBe(1);
    

  });
});
