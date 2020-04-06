import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';

import { AuthHeaderComponent } from '../shared/auth-layout/auth-header/auth-header.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [SigninComponent, AuthHeaderComponent, LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
