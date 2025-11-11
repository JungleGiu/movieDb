import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Api } from './api';

describe('Api', () => {
  let service: Api;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClientTesting()
      ]
    });
   
    url = 'https://api.themoviedb.org/3/'
    service = TestBed.inject(Api);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call get method', () => {
    const spy = spyOn(service, 'getList').and.callThrough();
    service.getList(url);
    expect(spy).toHaveBeenCalled();

  });
});
