import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { EntitiesListComponent } from './entitiesList.component';


const routes: Routes = [
  {
    path: '',
    component: EntitiesListComponent,
    data: {
      title: 'Role List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesListRoutingModule { }
