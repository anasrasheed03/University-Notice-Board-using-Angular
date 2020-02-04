import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { BlockStaffListComponent } from './blockStaffList.component';


const routes: Routes = [
  {
    path: '',
    component: BlockStaffListComponent,
    data: {
      title: 'Block Staff List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockStaffListRoutingModule { }
