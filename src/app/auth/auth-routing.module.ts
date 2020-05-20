import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LayoutComponent } from './layout/layout.component';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { SignupComponent } from './signup/signup.component';
import { AlreadyAccountComponent } from './already-account/already-account.component';
import { ClaimYourProfileComponent } from './claim-your-profile/claim-your-profile.component';
import { ReclaimProfileComponent } from './reclaim-profile/reclaim-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SigninComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'you-are',
        component: WhoYouAreComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'already-have-account',
        component: AlreadyAccountComponent
      },
      {
        path: 'claim-your-profile',
        component: ClaimYourProfileComponent
      },
      {
        path: 'reclaim-your-profile',
        component: ReclaimProfileComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
