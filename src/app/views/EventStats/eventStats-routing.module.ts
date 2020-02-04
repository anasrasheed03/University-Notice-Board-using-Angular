import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { EventStatsComponent } from './eventStats.component';


const routes: Routes = [
  {
    path: '',
    component: EventStatsComponent,
    data: {
      title: 'Event Stats'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventStatsRoutingModule { }
