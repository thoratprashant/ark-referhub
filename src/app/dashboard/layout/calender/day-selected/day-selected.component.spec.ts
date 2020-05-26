import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySelectedComponent } from './day-selected.component';

describe('DaySelectedComponent', () => {
  let component: DaySelectedComponent;
  let fixture: ComponentFixture<DaySelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
