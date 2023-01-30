import { TestBed } from '@angular/core/testing';

import { ProductoGqlService } from './productoGql.service';

describe('ProductoService', () => {
  let service: ProductoGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
