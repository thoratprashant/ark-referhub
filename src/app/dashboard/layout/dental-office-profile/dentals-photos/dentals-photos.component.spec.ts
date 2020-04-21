import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalsPhotosComponent } from './dentals-photos.component';

describe('DentalsPhotosComponent', () => {
  let component: DentalsPhotosComponent;
  let fixture: ComponentFixture<DentalsPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalsPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
