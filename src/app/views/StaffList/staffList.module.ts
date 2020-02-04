import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { TaskSearchComponent } from '../../s./staffList-routing.module-search.component';
// import { TaskTableComponent } from '../../staffList.componentle/task-table.component';
import { DataTableModule } from 'angular2-datatable';
import { SharedModule } from '../../shared-components/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { StaffListComponent } from './staffList.component';
import { StaffListRoutingModule } from './staffList-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StaffListRoutingModule,
    TabsModule,
    DataTableModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  declarations: [ 
    StaffListComponent,
    // TaskSearchComponent,
    // TaskTableComponent
  ],
  bootstrap: [ StaffListComponent ]
})

export class StaffListModule {}
