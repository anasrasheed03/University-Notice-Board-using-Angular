import { CommonService } from './../../shared-services/common.service';
import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableService, TableData } from '../../views/tables/datatable/datatable.service';
import { ChildMessageRenderer, EditButton, DeleteButton, ToolTip, EmailButton, ConditionalEditButton, ViewButton } from "./ag-grid-button.component";

import { AgGridNg2 } from 'ag-grid-angular';
import { Observable } from 'rxjs';
// import { MEEZAN_CONSTANTS } from '../../utilities/constants';

@Component({
  selector: 'task-table',
  templateUrl: 'task-table.component.html',
  providers: [DataTableService]
})
export class TaskTableComponent implements OnInit {

  @Input("") columnDefs;
  @Input("") rowData;
  @Input("") rowIndexToDelete;

  @ViewChild('agGrid') agGrid: AgGridNg2;

  public eventsSubscription: any;
  public editType;
  public readOnlyView: boolean = false;

  @Input() events: Observable<Object>;
  @Output() sendDataToFormObject: EventEmitter<number> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() downloadEvent: EventEmitter<any> = new EventEmitter();
  @Output() viewEvent: EventEmitter<any> = new EventEmitter();
  @Output() gotoTaskEvent: EventEmitter<any> = new EventEmitter();
  @Output() emailEvent: EventEmitter<any> = new EventEmitter();




private gridApi;
private gridColumnApi;
public rowHeight;
  public data: TableData;
  error: any;
  public userWorkQueue;
  public rowSelection;
  selectedRows: any = [];
  context;
  frameworkComponents;
  myFilterText;
  gridOptions;
  public defaultColDef;
  // private gridApi;
  // private gridColumnApi;
  constructor(
    private router: Router,
    private dataTableService: DataTableService,
    private commonService: CommonService
  ) {

    this.editType = "fullRow";
    // this.rowData = this.getUserWorkQueue();
    this.rowSelection = "multiple";
    this.context = { componentParent: this };
    this.defaultColDef = {
      tooltipComponent: "tooltip",
      resizable: true
    },
   

      this.gridOptions = {
        enableBrowserTooltips: true
      }
    this.frameworkComponents = {
      childMessageRenderer: ChildMessageRenderer,
      editButton: EditButton,
      viewButton : ViewButton,
      deleteButton: DeleteButton,
      tooltip: ToolTip,
     // downloadOrView: DownloadOrView,
      // download: Download,
      // view: View,
      emailButton: EmailButton,
      conditionalEditButton: ConditionalEditButton

    }
    // downloadOrView: DownloadOrView

  }

  methodFromParent(cell) {
    this.gotoTask(cell.data);
  }

  onColumnResized() {
    this.gridApi.resetRowHeights();
    // this.gridApi.setRowHeight(20)
  }


 

  methodFromEdit(cell, editedValue) {
    let objectValue = { ...cell, editedValue }
    this.sendDataToFormObject.emit(objectValue)
  }


  methodFromDelete(cell) {
    this.deleteEvent.emit(cell)

  }

  methodFromDownload(cell) {
    this.downloadEvent.emit(cell);
  }

  methodFromView(cell) {
    this.viewEvent.emit(cell);
  }

  methodFromEmail(cell) {
    this.emailEvent.emit(cell);
  }



  ngOnInit(): void {
    // this.agGrid.gridReady.subscribe(() => {
    //   this.agGrid.api.forEachNode(function (rowNode) {
    //     console.log("FOR EACH NODE");
    //     rowNode.setRowHeight(100);
    //   });
    //   this.agGrid.api.onRowHeightChanged();

    //   this.agGrid.api.rowDataChanged((rows) => {
    //     console.log("ROW DATA CHANGED");
    //     this.agGrid.api.forEachNode(function (rowNode) {
    //       console.log("FOR EACH NODE");
    //       rowNode.setRowHeight(100);
    //     });
    //     this.agGrid.api.onRowHeightChanged();
    //   })
    // })



    // For References Tab
    // if (this.events) {
    //   this.eventsSubscription = this.events.subscribe((data) => this.agGrid.api.setRowData(this.rowData)) 
    // }
  }



  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  gotoTask(data) {
    this.gotoTaskEvent.emit(data);
    // this.router.navigate(["./car-ijara", {
    //   appId: applicationNo,
    // }]);

    // this.router.navigate(["./car-ijara"], {
    //   queryParams: { appId: ciApplicationId }
    // })

    // switch (taskType) {

    //   case 'BRANCH':
    //     this.router.navigate(["./application-form", {
    //       pageState: MEEZAN_CONSTANTS.PAGE_STATE.Edit,
    //       appNo: applicationNo,

    //     }]);
    //     break;

    //   case 'BRANCH MANAGER APPROVAL':
    //     this.router.navigate(["./application-form", {
    //       pageState: MEEZAN_CONSTANTS.PAGE_STATE.Edit,
    //       appNo: applicationNo,
    //       disabled: this.readOnlyView
    //     }]);
    //     break;

    //   case 'EAMU ANALYST APPROVAL':
    //     this.router.navigate(["./eamu"]);
    //     break;

    //   case 'EAMU MANAGER APPROVAL':
    //     this.router.navigate(["./eamu"]);
    //     break;

    //   case 'CIU ANALYST APPROVAL':
    //     this.router.navigate(["./ciu", {
    //       pageState: MEEZAN_CONSTANTS.PAGE_STATE.Edit,
    //       appNo: applicationNo
    //     }]);

    //     break;

    //   case 'CIU MANAGER APPROVAL':
    //     this.router.navigate(["./ciu", {
    //       pageState: MEEZAN_CONSTANTS.PAGE_STATE.Edit,
    //       appNo: applicationNo
    //     }]);

    //     break;

    //   case 'RISK ANALYST APPROVAL':
    //     this.router.navigate(["./risk-analysis"]);
    //     break;

    //   case 'RISK MANAGER APPROVAL':
    //     this.router.navigate(["./risk-analysis"]);
    //     break;

    //   case 'BH APPROVAL':
    //     this.router.navigate(["./BH"]);
    //     break;

    //   case 'GH APPROVAL':
    //     this.router.navigate(["./GH"]);
    //     break;

    //   case 'DCEO APPROVAL':
    //     this.router.navigate(["./DCEO"]);
    //     break;

    //   case 'CEO APPROVAL':
    //     this.router.navigate(["./CEO"]);
    //     break;

    //   case 'CAD APPROVAL':
    //     this.router.navigate(["./external-valuation", { appNo: applicationNo }]);
    //     break;

    // }

  }

  onSelectionChanged(e) {
    this.selectedRows.push(this.agGrid.api.getSelectedRows())
  }

  displayRows() {
    let row = this.selectedRows.length - 1
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

    // params.api.sizeColumnsToFit();

    // params.api.sizeColumnsToFit();
    // window.addEventListener("resize", function() {
    //   setTimeout(function() {
    //     params.api.sizeColumnsToFit();
    //   });
    // });
  


  // columnsData(event) {
  // }

}
