import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalPersonalProfileComponent } from './dental-personal-profile.component';

describe('DentalPersonalProfileComponent', () => {
  let component: DentalPersonalProfileComponent;
  let fixture: ComponentFixture<DentalPersonalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalPersonalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
