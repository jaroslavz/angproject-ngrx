import { TestBed, async, inject } from '@angular/core/testing';
import { AuthTokenInterceptor } from './auth-token.interceptor';

describe('Service: AuthTokenInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTokenInterceptor]
    });
  });

  it('should be created', inject([AuthTokenInterceptor], (service: AuthTokenInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
