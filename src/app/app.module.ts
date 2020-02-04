import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ModalModule } from "ngx-bootstrap";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AngularmaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DonorListComponent } from './views/DonorList/donorList.component';
import { SubscriberRegisterComponent } from './views/subscriberRegister/subscriberRegister.component';
import { FacultyRegisterComponent } from './views/facultyRegister/facultyRegister.component';
import { CreateNotificationsComponent } from './views/CreateNotifications/create-notifications-components';
import { AddStudentComponent } from './views/AddStudent/add-component.component';
import { TeacherComponent } from './views/AddTeacher/teacher.component';
import { AddStaffComponent } from './views/addStaff/addStaff-components';
import {DataTableModule} from "angular-6-datatable";
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  imports: [
    ModalModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    NgImageSliderModule,
    AppHeaderModule,
    AppSidebarModule,
    DataTableModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,        
    // DialogModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      closeButton: true,
      tapToDismiss: true
    })
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AddStudentComponent,
    TeacherComponent,
    AddStaffComponent,
    DashboardComponent,
    // DonorListComponent,
    SubscriberRegisterComponent,
    FacultyRegisterComponent,
    CreateNotificationsComponent
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
