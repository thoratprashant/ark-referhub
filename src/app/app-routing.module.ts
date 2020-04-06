import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{
    path: '',
    component: LandingComponent,
  },
  {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules,enableTracing : true    

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
