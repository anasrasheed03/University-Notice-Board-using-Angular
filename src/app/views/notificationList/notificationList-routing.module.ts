import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { NotificationListComponent } from './notificationList.component';


const routes: Routes = [
  {
    path: '',
    component: NotificationListComponent,
    data: {
      title: 'Notification List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationListRoutingModule { }
