import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { AboutComponent } from './layout/dental-office-profile/about/about.component';
import { DentalsPhotosComponent } from './layout/dental-office-profile/dentals-photos/dentals-photos.component';


const routes: Routes = [{
  path: '',
  component: DashboardLayoutComponent,
  children: [
    {
      path: 'dental-office',
      component: AboutComponent
    },
    {
      path: 'dentals-photos',
      component: DentalsPhotosComponent
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
