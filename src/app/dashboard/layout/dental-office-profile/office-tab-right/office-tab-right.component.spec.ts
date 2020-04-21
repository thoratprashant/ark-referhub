import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTabRightComponent } from './office-tab-right.component';

describe('OfficeTabRightComponent', () => {
  let component: OfficeTabRightComponent;
  let fixture: ComponentFixture<OfficeTabRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeTabRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTabRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
