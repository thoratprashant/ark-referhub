import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingRightSideComponent } from './setting-right-side.component';

describe('SettingRightSideComponent', () => {
  let component: SettingRightSideComponent;
  let fixture: ComponentFixture<SettingRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
