import { TestBed } from '@angular/core/testing';

import { TablaLibrosService } from './tabla-libros.service';

describe('TablaLibrosService', () => {
  let service: TablaLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
