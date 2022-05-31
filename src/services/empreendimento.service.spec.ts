import { TestBed } from '@angular/core/testing';

import { EmpreendimentoService } from './empreendimento.service';

describe('EmpreendimentoService', () => {
  let service: EmpreendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpreendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
