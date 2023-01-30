import { TestBed } from '@angular/core/testing';

import { TipoMedidaService } from './tipo-medida.service';

describe('TipoMedidaService', () => {
  let service: TipoMedidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMedidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
