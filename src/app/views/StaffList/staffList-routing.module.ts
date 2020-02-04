import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { StaffListComponent } from './staffList.component';


const routes: Routes = [
  {
    path: '',
    component: StaffListComponent,
    data: {
      title: 'Staff List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffListRoutingModule { }
