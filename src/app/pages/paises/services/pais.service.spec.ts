import { TestBed } from '@angular/core/testing';

import { PaisService } from './pais.service';
import { HttpClientModule } from '@angular/common/http';

describe('PaisService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
