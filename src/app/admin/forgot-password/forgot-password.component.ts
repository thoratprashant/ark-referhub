import { Component, OnInit } from '@angular/core';
import { AuthenticateService, ForgotPasswordPayload } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  admin: ForgotPasswordPayload = {
    email: ""
  }
  error: string = "";
  message: string = "";

  constructor(private auth: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }

  forgotPassword = () => {
    this.auth.forgotPassword(this.admin).subscribe((data) => {
      this.admin.email = "";
      if (data.data.includes('success')) {
        this.message = "We have sent you instructions over email that how to reset a password";
        this.error = "";
      }
    }, (err) => {
      this.admin.email = "";
      if (err.status === 404) {
        this.error = "Oops! It looks like this email address is not registered on ReferHub. Please try again with another email";
        this.message = "";
      }
    });
  }

}
