import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SSSMSharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin/admin-layout.component';
import { ContentModule } from './admin/components/content/content.module';
import { FooterComponent } from './admin/components/footer/footer.component';
import { FooterModule } from './admin/components/footer/footer.module';
import { NavbarModule } from './admin/components/navbar/navbar.module';
import { ToolbarComponent } from './admin/components/toolbar/toolbar.component';
import { ToolbarModule } from './admin/components/toolbar/toolbar.module';
import { SSSMSidebarModule } from './admin/sidebar/sidebar.module';
// import { AdminComponent } from './admin/admin.component';
// import { BannerNotificationComponent } from './admin/banner-notifications/banner-notifications.component';
// import { BreadcrumbComponent } from './admin/breadcrumb/breadcrumb.component';
// import { FooterComponent } from './admin/footer/footer.component';
// import { HeaderComponent } from './admin/header/header.component';
// import { SidebarComponent } from './admin/sidebar/sidebar.component';
// import { SigninComponent } from './auth/signin.component';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    RouterModule,

        SSSMSharedModule,
        SSSMSidebarModule,
        ContentModule,
        FooterModule,
        RouterModule,
        NavbarModule,
        ToolbarModule
  ],
  exports: 
  [
    AdminLayoutComponent
  ],
})
export class LayoutModule { }
