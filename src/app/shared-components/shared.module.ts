import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from '../material.module';

import { SharedRoutingModule } from './shared-routing.module';
import { AttachementComponent } from './attachement/attachement.component';
import { MeezanInputComponent } from './meezan-input/meezan-input.component';
import { TaskTableComponent } from './task-table/task-table.component'
import { ViewButton,EditButton, DeleteButton } from './task-table/ag-grid-button.component';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap';
import { Subject_Service } from '../shared-services/subject.service';
import { LaddaModule } from 'angular2-ladda';
import { ToasterService, ToasterModule } from 'angular2-toaster';
import { PreventCutCopyPasteDirective } from '../directives/preventCutCopyPaste';
import { OnlyNumericCharAllowedDirective } from '../directives/onlyNumericChars';
import { OnlyAlphabetsAllowedDirective } from '../directives/onlyAlphabets';



@NgModule({
  declarations: [
    AttachementComponent,
    MeezanInputComponent,
    TaskTableComponent,
    ViewButton,
    EditButton,
    DeleteButton,
    PreventCutCopyPasteDirective,
    OnlyNumericCharAllowedDirective,
    OnlyAlphabetsAllowedDirective,
    

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DataTableModule,
    CollapseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularmaterialModule,
    ModalModule.forRoot(),
    AgGridModule.withComponents([]),
    LaddaModule,
  ],
  exports: [
    TaskTableComponent,
    AttachementComponent,
    MeezanInputComponent,
  ],
  entryComponents: [
    ViewButton,
    EditButton,
    DeleteButton
  ],
  providers: [
    Subject_Service,
  ]
})
export class SharedModule { }
