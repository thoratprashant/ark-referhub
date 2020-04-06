import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LayoutComponent } from './layout/layout.component';


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
      }
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
