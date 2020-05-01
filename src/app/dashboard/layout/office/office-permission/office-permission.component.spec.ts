import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePermissionComponent } from './office-permission.component';

describe('OfficePermissionComponent', () => {
  let component: OfficePermissionComponent;
  let fixture: ComponentFixture<OfficePermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficePermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
