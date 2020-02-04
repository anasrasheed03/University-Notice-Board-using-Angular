import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { AddStudentComponent } from './views/AddStudent/add-component.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterComponent } from './views/register/register.component';
import { CreateNotificationsComponent } from './views/CreateNotifications/create-notifications-components';
import { SubscriberRegisterComponent } from './views/subscriberRegister/subscriberRegister.component';
import { FacultyRegisterComponent } from './views/facultyRegister/facultyRegister.component';
import { TeacherComponent } from './views/AddTeacher/teacher.component';
import { AddStaffComponent } from './views/addStaff/addStaff-components';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path:'teacherSignup',
    component: SubscriberRegisterComponent,
    data: {
      title: 'Teacher Signup'
    }
  },
  {
    path: 'facultySignup',
    component: FacultyRegisterComponent,
    data: {
      title: 'Faculty Singup'
    }
  },
  // {
  //   path: 'addEvent',
  //   component: AddeventsComponent,
  //   data: {
  //     title: 'Add Event'
  //   }
  // },
  // {
  //   path: 'eventList',
  //   component: EventComponent,
  //   data: {
  //     title: 'Event Type'
  //   }
  // },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'studentList',
        loadChildren: './views/studentList/studentList.module#StudentListModule',
        data: {
          title: 'Student List'
        }
      },
      {
        path: 'blockstudentList',
        loadChildren: './views/blockStudentList/blockStudentList.module#BlockStudentListModule',
        data: {
          title: 'Block Student List'
        }
      },
      {
        path: 'student',
        component: AddStudentComponent,
        data: {
          title: 'Add Student'
        }
      },
      {
        path: 'staff',
        component: AddStaffComponent,
        data: {
          title: 'Add Staff'
        }
      },{
        path: 'staffList',
        loadChildren: './views/StaffList/staffList.module#StaffListModule',
        data:{
          title: 'Staff List'
        }
      },
      
      {
        path: 'blockstaffList',
        loadChildren: './views/blockStaffList/blockStaffList.module#BlockStaffListModule',
        data: {
          title: 'Block Staff List'
        }
      },
      {
        path: 'eventView',
        component:TeacherComponent,
        data: {
          title: 'Event List'
        }
      },
      {
        path: 'teacher',
        component: TeacherComponent,
        data: {
          title: 'Add Teacher'
        }
      },
      {
        path: 'teacherList',
        loadChildren: './views/teacherList/teacherList.module#TeacherListModule',
        data: {
          title: 'Teacher List'
        }
      },
      {
        path: 'blockteacherList',
        loadChildren: './views/blockTeacherList/blockTeacherList.module#BlockTeacherListModule',
        data: {
          title: 'Block Teacher List'
        }
      },
      {
        path: 'roleList',
        loadChildren: './views/RoleList/roleList.module#RoleListModule',
        data: {
          title: 'Event List'
        }
      },
      {
        path: 'donorList',
        loadChildren: './views/DonorList/donorList.module#DonorListModule',
        data: {
          title: 'Donor List'
        }
      },
      {
        path: 'userList',
        loadChildren: './views/UserList/userList.module#UserListModule',
        data: {
          title: 'User List'
        }
      },
      {
        path: 'eventStats',
        loadChildren: './views/EventStats/eventStats.module#EventStatsModule',
        data: {
          title: 'Event Stats'
        }
      },
      {
        path: 'noticeBoard',
        loadChildren: './views/pageList/pageList.module#PageListModule',
        data: {
          title: 'Notice Board'
        }
      },
      {
        path: 'entitiesList',
        loadChildren: './views/entitiesList/entitiesList.module#EntitiesListModule',
        data: {
          title: 'Page List'
        }
      },
      {
        path: 'notificationList',
        loadChildren: './views/notificationList/notificationList.module#NotificationListModule',
        data: {
          title: 'Notification List'
        }
      },
      {
        path: 'notifications',
        component: CreateNotificationsComponent,
        data: {
          title: 'Create Notification'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
