import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { TeacherListComponent } from './teacherListcomponent';


const routes: Routes = [
  {
    path: '',
    component: TeacherListComponent,
    data: {
      title: 'Teacher List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
