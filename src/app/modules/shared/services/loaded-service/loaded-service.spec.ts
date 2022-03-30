import { TestBed } from '@angular/core/testing';
import { LoadedService } from './loaded.service';



describe('IsLoadedServiceService', () => {
  let service: LoadedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return true', () =>{
    expect(service.isLoaded).toBeTrue;
  });

  it('should return false', () =>{
    expect(service.isNotLoaded).toBeFalse;
  });
});
