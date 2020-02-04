import { Component } from "@angular/core";
import { ICellRendererAngularComp, ITooltipAngularComp } from "ag-grid-angular";
import { Router } from '@angular/router';
import { GridOptionsWrapper } from 'ag-grid-community';
import { CommonService } from '../../shared-services/common.service';
import { CommonHelper } from '../../utilities/common.helper';

@Component({
  selector: 'child-cell',
  template: `<div class="grid-button"><button (click)="invokeParentMethod()" class="btn btn-link">Proceed To Task</button></div>`,
  styles: [
    ``
  ]
})


export class ChildMessageRenderer implements ICellRendererAngularComp {

  constructor(private router: Router) { }

  public params: any;


  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(this.params)
  }

  refresh(): boolean {
    return false;
  }

}



@Component({
  selector: 'view-cell',
  template: ` <div class="grid-button"> <button class="btn-icon" (click)="editReference()"><i class="fa fa-eye fa-lg fa-custom"></i></button></div>`,
  styles: [
    ``
  ]
})


export class ViewButton implements ICellRendererAngularComp {

  public params: any;
  gridApi: any;
  public editClicked: boolean = false

  agInit(params: any): void {
    this.params = params;
  }


  refresh(): boolean {
    return false;
  }

  editReference() {
    this.editClicked = true;
    // this.params.api.setFocusedCell(this.params.node.rowIndex, this.params.node.columnApi.columnController.columnDefs[1].field);
    // this.params.api.startEditingCell({
    //   rowIndex: this.params.node.rowIndex,
    //   colKey:this.params.node.columnApi.columnController.columnDefs[1].field
    // });
    // console.log(this.params.node.columnApi.columnController.columnDefs[1].field)
    this.params.context.componentParent.methodFromEdit(this.params.node.data, this.editClicked)

  }

  onSaveEdit() {
    this.params.api.stopEditing();
    this.editClicked = false;
  }

  onCancelEdit() {
    this.params.api.stopEditing(true);
    this.editClicked = false;
  }

}



@Component({
  selector: 'edit-cell',
  template: ` <div class="grid-button"> <button class="btn-icon" (click)="editReference()"><span class="icon-edit"></span></button></div>`,
  styles: [
    ``
  ]
})


export class EditButton implements ICellRendererAngularComp {

  public params: any;
  gridApi: any;
  public editClicked: boolean = false

  agInit(params: any): void {
    this.params = params;
  }


  refresh(): boolean {
    return false;
  }

  editReference() {
    this.editClicked = true;
    // this.params.api.setFocusedCell(this.params.node.rowIndex, this.params.node.columnApi.columnController.columnDefs[1].field);
    // this.params.api.startEditingCell({
    //   rowIndex: this.params.node.rowIndex,
    //   colKey:this.params.node.columnApi.columnController.columnDefs[1].field
    // });
    // console.log(this.params.node.columnApi.columnController.columnDefs[1].field)
    this.params.context.componentParent.methodFromEdit(this.params.node.data, this.editClicked)

  }

  onSaveEdit() {
    this.params.api.stopEditing();
    this.editClicked = false;
  }

  onCancelEdit() {
    this.params.api.stopEditing(true);
    this.editClicked = false;
  }

}



@Component({
  selector: 'edit-cell',
  template: ` <div class="grid-button"> <button class="btn-delete" (click)="deleteDialog($event)"><span class="icon-delete"></span></button></div>`,
  styles: [
    ``
  ]
})


export class DeleteButton implements ICellRendererAngularComp {

  constructor(private commonService: CommonService) { }

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }


  refresh(): boolean {
    return false;
  }

  deleteDialog(event) {
    this.delete()
    // this.commonService.openCancelConfirmationDialog('Please Confirm', 'Do you really want to delete?').then(
    //   (res) => {
    //     res ? this.delete() : null
    //   }
    // );
  }

  delete() {
    this.params.context.componentParent.rowData.splice(this.params.node.rowIndex, 1)
    let newdata = this.params.context.componentParent.rowData
    this.params.context.componentParent.agGrid.api.setRowData(newdata)
    this.params.context.componentParent.methodFromDelete(this.params.node.data)
  }

}


@Component({
  selector: 'tool-tip',
  template: `<div>
  <p><span>samra</span></p>
  <p><span>Country: </span>samra</p>
  <p><span>Total: </span>5</p>
</div>`,
  styles: [

  ]
})


export class ToolTip implements ITooltipAngularComp {

  constructor(private commonService: CommonService) { }

  public params: any;

  agInit(params: any): void {
    this.params = params;

  }
  refresh(): boolean {
    return false;
  }
}

@Component({
  selector: 'view-cell',
  template: `<div class="grid-button">  
  <button class="btn-icon" [disabled]="!params.node.data.viewCondition" (click)="OpenAttachement($event)">
  <i class="fa fa-eye fa-lg fa-custom"></i>
  </button>
</div>`,
  styles: [
    ``
  ]
})

// export class View implements ICellRendererAngularComp {

//   constructor(private commonService: CommonService) { }

//   public params: any;

//   agInit(params: any): void {
//     this.params = params;
//     this.params.node.data.viewCondition = CommonHelper.allowedViewExtension(this.params.node.data.path);
//   }


//   refresh(): boolean {
//     return false;
//   }

//   OpenAttachement(event) {
//       this.params.context.componentParent.methodFromView(this.params.data)
// }
// }

@Component({
  selector: 'downloa-cell',
  template: `<div class="grid-button">  
  <button class="btn-icon btn-green" (click)="downloadAttachement($event)">
  <i class="fa fa-download fa-sm"></i>
  </button>
</div>`,
  styles: [
    ``
  ]
})


// export class Download implements ICellRendererAngularComp {

//   constructor(private commonService: CommonService) { }

//   public params: any;

//   agInit(params: any): void {
//     this.params = params;
//     this.params.node.data.viewCondition = CommonHelper.allowedViewExtension(this.params.node.data.path);
//   }


//   refresh(): boolean {
//     return false;
//   }

//   downloadAttachement(event) {
//       this.params.context.componentParent.methodFromDownload(this.params.data)
// }

// }


@Component({
  selector: 'email-cell',
  template: ` <div class="grid-button"> <button class="btn-icon" (click)="email($event)"><span class="fa fa-envelope"></span></button></div>`,
  styles: [
    ``
  ]
})


export class EmailButton implements ICellRendererAngularComp {

  constructor(private commonService: CommonService) { }

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  email(event) {
    this.params.context.componentParent.methodFromEmail(this.params.data)
  }

}



@Component({
  selector: 'edit-cell',
  template: ` <div class="grid-button"> 
  <button *ngIf="params.node.data.conditionalFunction()" class="btn-icon" (click)="editReference()">
  <span class="icon-edit"></span>
  </button>
  </div>`,
  styles: [
    ``
  ]
})


export class ConditionalEditButton implements ICellRendererAngularComp {

  public params: any;
  gridApi: any;
  public editClicked: boolean = false

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  editReference() {
    this.editClicked = true;
    this.params.context.componentParent.methodFromEdit(this.params.node.data, this.editClicked)
  }

  onSaveEdit() {
    this.params.api.stopEditing();
    this.editClicked = false;
  }

  onCancelEdit() {
    this.params.api.stopEditing(true);
    this.editClicked = false;
  }

}





