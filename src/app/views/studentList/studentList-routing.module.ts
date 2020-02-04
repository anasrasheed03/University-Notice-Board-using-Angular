import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { StudentListComponent } from './studentList.component';


const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
    data: {
      title: 'Student List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentListRoutingModule { }
