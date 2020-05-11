import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LayoutComponent } from './layout/layout.component';

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
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
