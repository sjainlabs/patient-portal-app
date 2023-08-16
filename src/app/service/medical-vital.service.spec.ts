import { TestBed } from '@angular/core/testing';

import { MedicalVitalService } from './medical-vital.service';

describe('MedicalVitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalVitalService = TestBed.get(MedicalVitalService);
    expect(service).toBeTruthy();
  });
});
