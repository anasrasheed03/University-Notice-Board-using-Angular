import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PageListRoutingModule } from './pageList-routing.module';
import { PageListComponent } from './pageList.component';
// import { TaskSearchComponent } from '../../shared-components/task-search/task-search.component';
// import { TaskTableComponent } from '../../shared-components/task-table/task-table.component';
import { DataTableModule } from 'angular2-datatable';
import { SharedModule } from '../../shared-components/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageListRoutingModule,
    TabsModule,
    DataTableModule,
    NgImageSliderModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  declarations: [ 
    PageListComponent,
    // TaskSearchComponent,
    // TaskTableComponent
  ],
  bootstrap: [ PageListComponent ]
})

export class PageListModule {}
