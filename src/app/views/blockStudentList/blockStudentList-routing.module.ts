import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { BlockStudentListComponent } from './blockStudentList.component';


const routes: Routes = [
  {
    path: '',
    component: BlockStudentListComponent,
    data: {
      title: 'Block Student List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockStudentListRoutingModule { }
