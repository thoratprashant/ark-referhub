import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook-invites',
  templateUrl: './facebook-invites.component.html',
  styleUrls: ['./facebook-invites.component.scss']
})
export class FacebookInvitesComponent implements OnInit {

  step2 = false;
  step1 = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  openStep2() {
    this.step2 = true;
    this.step1 = false;
  }
}
