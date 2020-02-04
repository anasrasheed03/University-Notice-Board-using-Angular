import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { TaskSearchComponent } from '../../shared-components/task-search/task-search.component';
// import { TaskTableComponent } from '../../shared-components/task-table/task-table.component';
import { DataTableModule } from 'angular2-datatable';
import { SharedModule } from '../../shared-components/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { BlockStudentListComponent } from './blockStudentList.component';
import { BlockStudentListRoutingModule } from './blockStudentList-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlockStudentListRoutingModule,
    TabsModule,
    DataTableModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  declarations: [ 
    BlockStudentListComponent,
  ],
  bootstrap: [ BlockStudentListComponent ]
})

export class BlockStudentListModule {}
