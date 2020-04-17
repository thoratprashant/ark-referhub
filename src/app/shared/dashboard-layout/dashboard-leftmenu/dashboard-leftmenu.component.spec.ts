import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftmenuComponent } from './dashboard-leftmenu.component';

describe('DashboardLeftmenuComponent', () => {
  let component: DashboardLeftmenuComponent;
  let fixture: ComponentFixture<DashboardLeftmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLeftmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeftmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
