import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { RoleListComponent } from './roleList.component';


const routes: Routes = [
  {
    path: '',
    component: RoleListComponent,
    data: {
      title: 'Role List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleListRoutingModule { }
