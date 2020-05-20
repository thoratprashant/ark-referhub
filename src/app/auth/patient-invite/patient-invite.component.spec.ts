import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInviteComponent } from './patient-invite.component';

describe('PatientInviteComponent', () => {
  let component: PatientInviteComponent;
  let fixture: ComponentFixture<PatientInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
