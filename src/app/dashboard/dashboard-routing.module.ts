import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { AboutComponent } from './layout/dental-office-profile/about/about.component';
import { DentalsPhotosComponent } from './layout/dental-office-profile/dentals-photos/dentals-photos.component';
import { SearchResultsComponent } from './layout/search-results/search-results.component';
import { DentalPersonalProfileComponent } from './layout/dental-personal-profile/dental-personal-profile.component';
import { SettingsComponent } from './layout/settings/settings.component';


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
    {
      path: 'search-results',
      component: SearchResultsComponent
    },
    {
      path: 'dental-profile',
      component: DentalPersonalProfileComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
