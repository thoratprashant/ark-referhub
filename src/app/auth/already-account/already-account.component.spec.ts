import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyAccountComponent } from './already-account.component';

describe('AlreadyAccountComponent', () => {
  let component: AlreadyAccountComponent;
  let fixture: ComponentFixture<AlreadyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
