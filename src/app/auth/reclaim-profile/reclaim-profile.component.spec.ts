import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclaimProfileComponent } from './reclaim-profile.component';

describe('ReclaimProfileComponent', () => {
  let component: ReclaimProfileComponent;
  let fixture: ComponentFixture<ReclaimProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclaimProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclaimProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
