import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EntitiesListRoutingModule } from './entitiesList-routing.module';
import { EntitiesListComponent } from './entitiesList.component';
// import { TaskSearchComponent } from '../../shared-components/task-search/task-search.component';
// import { TaskTableComponent } from '../../shared-components/task-table/task-table.component';
import { DataTableModule } from 'angular2-datatable';
import { SharedModule } from '../../shared-components/shared.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EntitiesListRoutingModule,
    TabsModule,
    DataTableModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  declarations: [ 
    EntitiesListComponent,
    // TaskSearchComponent,
    // TaskTableComponent
  ],
  bootstrap: [ EntitiesListComponent ]
})

export class EntitiesListModule {}
