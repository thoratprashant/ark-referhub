import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderRightSideComponent } from './calender-right-side.component';

describe('CalenderRightSideComponent', () => {
  let component: CalenderRightSideComponent;
  let fixture: ComponentFixture<CalenderRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
