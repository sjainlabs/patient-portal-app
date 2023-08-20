import { TestBed } from '@angular/core/testing';

import { CurrentMedicalService } from './current-medical.service';

describe('CurrentMedicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentMedicalService = TestBed.get(CurrentMedicalService);
    expect(service).toBeTruthy();
  });
});
