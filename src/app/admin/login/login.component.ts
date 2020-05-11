import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin = {
    email: "",
    password: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  authenticateAdmin = () => {
    console.log('Finally - ', this.admin);
  }

}
