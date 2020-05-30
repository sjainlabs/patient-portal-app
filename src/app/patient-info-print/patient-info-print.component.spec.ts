import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoPrintComponent } from './patient-info-print.component';

describe('PatientInfoPrintComponent', () => {
  let component: PatientInfoPrintComponent;
  let fixture: ComponentFixture<PatientInfoPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInfoPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
