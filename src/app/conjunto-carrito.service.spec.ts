import { TestBed } from '@angular/core/testing';

import { ConjuntoCarritoService } from './conjunto-carrito.service';

describe('ConjuntoCarritoService', () => {
  let service: ConjuntoCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjuntoCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
