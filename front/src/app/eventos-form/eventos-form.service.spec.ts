import { TestBed } from '@angular/core/testing';

import { EventosFormService } from './eventos-form.service';

describe('EventosFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventosFormService = TestBed.get(EventosFormService);
    expect(service).toBeTruthy();
  });
});
