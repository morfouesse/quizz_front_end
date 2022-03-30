import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('IsErrorService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true', () =>{
    expect(service.isError).toBeTrue;
  });

  it('should return false', () =>{
    expect(service.isNotError).toBeFalse;
  });

});
