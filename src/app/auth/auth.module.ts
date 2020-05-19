import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthHeaderComponent } from '../shared/auth-layout/auth-header/auth-header.component';
import { AuthFooterComponent } from '../shared/auth-layout/auth-footer/auth-footer.component';
import { LayoutComponent } from './layout/layout.component';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { SignupComponent } from './signup/signup.component';
import { AlreadyAccountComponent } from './already-account/already-account.component';
import { ClaimYourProfileComponent } from './claim-your-profile/claim-your-profile.component';
import { ReclaimProfileComponent } from './reclaim-profile/reclaim-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SigninComponent,
    AuthHeaderComponent,
    LayoutComponent,
    AuthFooterComponent,
    WhoYouAreComponent,
    SignupComponent,
    AlreadyAccountComponent,
    ClaimYourProfileComponent,
    ReclaimProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
