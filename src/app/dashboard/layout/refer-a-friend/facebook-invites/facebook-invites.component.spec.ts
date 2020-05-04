import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookInvitesComponent } from './facebook-invites.component';

describe('FacebookInvitesComponent', () => {
  let component: FacebookInvitesComponent;
  let fixture: ComponentFixture<FacebookInvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookInvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
