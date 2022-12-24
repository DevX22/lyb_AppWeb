import { TestBed } from '@angular/core/testing';

import { LoadJsService } from './load-js.service';

describe('LoadJsService', () => {
  let service: LoadJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
