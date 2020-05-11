import { Component, OnInit } from '@angular/core';
import { AuthenticateService, ResetPasswordPayload } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  admin: ResetPasswordPayload = {
    email: ""
  }
  error: "";

  constructor(private auth: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword = () => {
    console.log('INDIA')
    this.auth.resetPassword(this.admin).subscribe((data) => {
      this.error = "";
      this.router.navigateByUrl('/admin/login');
    }, (err) => {
      if (err.status === 404) this.error = err.error;
    });
  }

}
