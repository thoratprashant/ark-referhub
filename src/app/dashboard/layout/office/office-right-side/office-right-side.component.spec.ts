import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeRightSideComponent } from './office-right-side.component';

describe('OfficeRightSideComponent', () => {
  let component: OfficeRightSideComponent;
  let fixture: ComponentFixture<OfficeRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
