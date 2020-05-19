import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminActionsService, SessionPayload, ResetPasswordPayload } from '../admin-actions.service';
import { MustMatch } from '../helpers/must-match.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  resetPasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private action: AdminActionsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.userSession.session = this.route.snapshot.paramMap.get("session");
    this.action.getUserBySession(this.userSession).subscribe((data) => {
      this.loading = false;
    }, (err) => {
      this.loading = false;
      if (err.status === 404) this.error = "Link is not valid";
    });
  }

  get formControls() { return this.resetPasswordForm.controls; }

  resetPassword = () => {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
        return;
    }
    this.action.resetPassword(this.user).subscribe((data) => {
      this.user.password = "";
      this.user.confirmPassword = "";
      if (data) this.isPasswordSet = true;
      localStorage.removeItem('adminToken');
    }, (err) => {
      console.log("ResetPasswordComponent -> resetPassword -> err", err);
    });
  }
}
