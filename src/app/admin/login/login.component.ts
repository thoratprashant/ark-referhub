import { Component, OnInit } from '@angular/core';
import { AdminActionsService, LoginPayload } from '../admin-actions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: LoginPayload = {
    email: '',
    password: '',
    type: 'admin'
  };

  error: string = "";

  constructor(private action: AdminActionsService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('adminToken')) {
      this.router.navigateByUrl('/admin/userList');
    }
  }

  authenticateAdmin = () => {
    this.action.login(this.credentials).subscribe((data) => {
      this.error = "";
      this.router.navigateByUrl('/admin/userList');
    }, (err) => {
      if (err.status === 401) this.error = err.error;
    });
  }

}
