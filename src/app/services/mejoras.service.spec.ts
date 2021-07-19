import { TestBed } from '@angular/core/testing';

import { MejorasService } from './mejoras.service';

describe('MejorasService', () => {
  let service: MejorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MejorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
