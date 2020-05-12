import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticateService, SessionPayload, ResetPasswordPayload } from '../authenticate.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  userSession: SessionPayload = {
    session: ""
  };
  error: string = "";
  message: string = "";
  loading: Boolean = true;
  user: ResetPasswordPayload = {
    password: "",
    confirmPassword: ""
  }
  isPasswordSet: Boolean = false;

  constructor(private auth: AuthenticateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userSession.session = this.route.snapshot.paramMap.get("session");
    this.auth.getUserBySession(this.userSession).subscribe((data) => {
      this.loading = false;
      console.log("ResetPasswordComponent -> ngOnInit -> data", data);
    }, (err) => {
      this.loading = false;
      console.log("ResetPasswordComponent -> ngOnInit -> err", err);
      if (err.status === 404) this.error = "Link is not valid";
    });
  }

  resetPassword = () => {
    this.auth.resetPassword(this.user).subscribe((data) => {
      console.log("ResetPasswordComponent -> resetPassword -> data", data)
      this.user.password = "";
      this.user.confirmPassword = "";
      if (data) this.isPasswordSet = true;
    }, (err) => {
      console.log("ResetPasswordComponent -> resetPassword -> err", err);
    });
  }
}
