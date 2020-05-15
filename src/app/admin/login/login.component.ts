import { Component, OnInit } from '@angular/core';
import { AuthenticateService, LoginPayload } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: LoginPayload = {
    email: '',
    password: ''
  };

  error: string = "";

  constructor(private auth: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('adminToken')) {
      this.router.navigateByUrl('/admin/userList');
    }
  }

  authenticateAdmin = () => {
    this.auth.login(this.credentials).subscribe((data) => {
      this.error = "";
      this.router.navigateByUrl('/admin/userList');
    }, (err) => {
      if (err.status === 401) this.error = err.error;
    });
  }

}
