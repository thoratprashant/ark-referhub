import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { AboutComponent } from './layout/dental-office-profile/about/about.component';
import { DentalsPhotosComponent } from './layout/dental-office-profile/dentals-photos/dentals-photos.component';
import { SearchResultsComponent } from './layout/search-results/search-results.component';
import { DentalPersonalProfileComponent } from './layout/dental-personal-profile/dental-personal-profile.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { OfficeComponent } from './layout/office/office.component';
import { OfficePermissionComponent } from './layout/office/office-permission/office-permission.component';
import { InvitesComponent } from './layout/refer-a-friend/invites/invites.component';
import { FacebookInvitesComponent } from './layout/refer-a-friend/facebook-invites/facebook-invites.component';
import { StaffListComponent } from './layout/staff/staff-list/staff-list.component';
import { StaffTasksComponent } from './layout/staff/staff-tasks/staff-tasks.component';
import { StaffSettingsComponent } from './layout/staff/staff-settings/staff-settings.component';
import { CalenderComponent } from './layout/calender/calender/calender.component';
import { DaySelectedComponent } from './layout/calender/day-selected/day-selected.component';
import { PatientListComponent } from './layout/patient-list/patient-list.component';


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
    {
      path: 'office',
      component: OfficeComponent
    },
    {
      path: 'office-permission',
      component: OfficePermissionComponent
    },
    {
      path: 'invites-a-friend',
      component: InvitesComponent
    },
    {
      path: 'facebook-invites',
      component: FacebookInvitesComponent
    },
    {
      path: 'staff',
      component: StaffListComponent
    },
    {
      path: 'staff-task',
      component: StaffTasksComponent
    },
    {
      path: 'staff-setting',
      component: StaffSettingsComponent
    },
    {
      path: 'calender',
      component: CalenderComponent
    },
    {
      path: 'day-selected',
      component: DaySelectedComponent
    },
    {
      path: 'patient-list',
      component: PatientListComponent
    },
    
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
