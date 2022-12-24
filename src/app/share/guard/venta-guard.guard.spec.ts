import { TestBed } from '@angular/core/testing';

import { VentaGuard } from './venta-guard.guard';

describe('VentaGuardGuard', () => {
  let guard: VentaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VentaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
