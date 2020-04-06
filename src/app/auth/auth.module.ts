import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';

import { AuthHeaderComponent } from '../shared/auth-layout/auth-header/auth-header.component';


@NgModule({
  declarations: [SigninComponent, AuthHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
