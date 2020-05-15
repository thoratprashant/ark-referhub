import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {  
        path: '',
        component: LoginComponent
      },    
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
      },
      {
        path: 'resetPassword/:session',
        component: ResetPasswordComponent
      },
      {
        path: 'userList',
        component: UserListComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'userProfile/:userId',
        component: UserProfileComponent,
        canActivate: [AuthGuardService]
      },
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ],
})
export class AdminRoutingModule { }
