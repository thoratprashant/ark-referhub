import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { AboutComponent } from './layout/dental-office-profile/about/about.component';
import { DashboardHeaderComponent } from '../shared/dashboard-layout/dashboard-header/dashboard-header.component';
import { DashboardLeftmenuComponent } from '../shared/dashboard-layout/dashboard-leftmenu/dashboard-leftmenu.component';
import { DashboardFooterComponent } from '../shared/dashboard-layout/dashboard-footer/dashboard-footer.component';
import { OfficeTabRightComponent } from './layout/dental-office-profile/office-tab-right/office-tab-right.component';
import { DentalsPhotosComponent } from './layout/dental-office-profile/dentals-photos/dentals-photos.component';
import { SearchResultsComponent } from './layout/search-results/search-results.component';
import { Ng5SliderModule } from 'ng5-slider';
import { DentalPersonalProfileComponent } from './layout/dental-personal-profile/dental-personal-profile.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { SettingRightSideComponent } from './layout/settings/setting-right-side/setting-right-side.component';
import { OfficeComponent } from './layout/office/office.component';
import { OfficeRightSideComponent } from './layout/office/office-right-side/office-right-side.component';
import { OfficePermissionComponent } from './layout/office/office-permission/office-permission.component';
import { InvitesComponent } from './layout/refer-a-friend/invites/invites.component';
import { FacebookInvitesComponent } from './layout/refer-a-friend/facebook-invites/facebook-invites.component';
import { StaffListComponent } from './layout/staff/staff-list/staff-list.component';
import { StaffTasksComponent } from './layout/staff/staff-tasks/staff-tasks.component';
import { StaffSettingsComponent } from './layout/staff/staff-settings/staff-settings.component';




@NgModule({
  declarations: [DashboardLayoutComponent, AboutComponent, DashboardHeaderComponent, DashboardLeftmenuComponent, 
    DashboardFooterComponent, OfficeTabRightComponent, DentalsPhotosComponent, SearchResultsComponent, 
    DentalPersonalProfileComponent, SettingsComponent, SettingRightSideComponent, OfficeComponent, 
    OfficeRightSideComponent, OfficePermissionComponent, InvitesComponent, FacebookInvitesComponent, StaffListComponent, 
    StaffTasksComponent, StaffSettingsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    Ng5SliderModule
  ]
})
export class DashboardModule { }
