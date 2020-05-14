import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTasksComponent } from './staff-tasks.component';

describe('StaffTasksComponent', () => {
  let component: StaffTasksComponent;
  let fixture: ComponentFixture<StaffTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
