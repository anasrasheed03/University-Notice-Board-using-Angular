import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { BlockTeacherListComponent } from './blockTeacherList.component';


const routes: Routes = [
  {
    path: '',
    component: BlockTeacherListComponent,
    data: {
      title: 'Block Teacher List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockTeacherListRoutingModule { }
