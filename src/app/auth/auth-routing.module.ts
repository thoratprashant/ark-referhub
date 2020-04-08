import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LayoutComponent } from './layout/layout.component';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { SignupComponent } from './signup/signup.component';


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
      }
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
