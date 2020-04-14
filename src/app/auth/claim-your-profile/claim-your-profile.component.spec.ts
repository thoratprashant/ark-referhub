import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimYourProfileComponent } from './claim-your-profile.component';

describe('ClaimYourProfileComponent', () => {
  let component: ClaimYourProfileComponent;
  let fixture: ComponentFixture<ClaimYourProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimYourProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimYourProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
