import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StudentListRoutingModule } from './studentList-routing.module';
// import { TaskSearchComponent } from '../../shared-components/task-search/task-search.component';
// import { TaskTableComponent } from '../../shared-components/task-table/task-table.component';
import { DataTableModule } from 'angular2-datatable';
import { SharedModule } from '../../shared-components/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { StudentListComponent } from './studentList.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentListRoutingModule,
    TabsModule,
    DataTableModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  declarations: [ 
    StudentListComponent,
    // TaskSearchComponent,
    // TaskTableComponent
  ],
  bootstrap: [ StudentListComponent ]
})

export class StudentListModule {}
