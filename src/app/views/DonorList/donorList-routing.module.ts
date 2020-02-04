import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { DonorListComponent } from './donorList.component';


const routes: Routes = [
  {
    path: '',
    component: DonorListComponent,
    data: {
      title: 'Donor List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorListRoutingModule { }
