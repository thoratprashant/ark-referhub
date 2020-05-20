import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  suggestiveList = false;

  constructor() { }

  ngOnInit(): void {
  }

  emailAddress(val){
    this.suggestiveList = true;
    if(val == ""){
      this.suggestiveList = false;
    }
  }
}
