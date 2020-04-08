import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthHeaderComponent } from '../shared/auth-layout/auth-header/auth-header.component';
import { AuthFooterComponent } from '../shared/auth-layout/auth-footer/auth-footer.component';
import { LayoutComponent } from './layout/layout.component';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [SigninComponent, AuthHeaderComponent, LayoutComponent, AuthFooterComponent, WhoYouAreComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
