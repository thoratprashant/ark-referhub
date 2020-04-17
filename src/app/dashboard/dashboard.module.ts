import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { AboutComponent } from './layout/dental-office-profile/about/about.component';
import { DashboardHeaderComponent } from '../shared/dashboard-layout/dashboard-header/dashboard-header.component';
import { DashboardLeftmenuComponent } from '../shared/dashboard-layout/dashboard-leftmenu/dashboard-leftmenu.component';
import { DashboardFooterComponent } from '../shared/dashboard-layout/dashboard-footer/dashboard-footer.component';



@NgModule({
  declarations: [DashboardLayoutComponent, AboutComponent, DashboardHeaderComponent, DashboardLeftmenuComponent, DashboardFooterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
