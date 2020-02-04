import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { PageListComponent } from './pageList.component';


const routes: Routes = [
  {
    path: '',
    component: PageListComponent,
    data: {
      title: 'Notifice Board'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageListRoutingModule { }
