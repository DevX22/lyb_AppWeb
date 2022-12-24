import { TestBed } from '@angular/core/testing';

import { AuthUsserService } from './auth-usser.service';

describe('AuthUsserService', () => {
  let service: AuthUsserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUsserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
