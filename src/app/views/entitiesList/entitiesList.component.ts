import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: 'entitiesList.component.html'
})
export class EntitiesListComponent implements OnInit {

  public userRole;
  public rowData;

  columnDefs = [
    { headerName: '#', field: 'id', sortable: true, filter: 'agTextColumnFilter', width: 70, lockPosition: true, suppressMenu: true },
    { headerName: 'Name', field: 'entity_Name', sortable: true, filter: 'agTextColumnFilter',width: 350, lockPosition: true, suppressMenu: true },
    { headerName: 'Code', field: 'entity_Code', sortable: true, filter: 'agTextColumnFilter', width: 350, lockPosition: true, suppressMenu: true },
    { headerName: 'Action', field: 'ACTION', cellRenderer: "editButton", width: 150, lockPosition: true, suppressMenu: true, pinned: "right" },
    { headerName: 'Disable', field: 'delete', cellRenderer: "deleteButton", width: 150, lockPosition: true, suppressMenu: true, pinned: "right" },
  ];
  constructor(private http: HttpClient,private routr: Router) {

  }

  ngOnInit(): void {
    this.getAllSubmission();
  }


  display(e) {
    let selectedRowsLength = e.length - 1
    console.log(e[selectedRowsLength])

  }

  editUserDetails(e){
    this.routr.navigate(['/addSubscription'], { queryParams: { id: e.id } });
}

  getAllSubmission() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "entityList.php").subscribe(
      (res) => {
        if (res['length'] != 0) {
          this.rowData = res['data'];
        }
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )
  }


  disableSubType(e){
    console.log(e)
    let payload = {
      id: e.id
  }
    this.http.post("http://noticeboard.plenary-session.com/apis/" + "disableEntity.php", payload).subscribe(
      (res) => {
        if (res['data']['status'] == 201) {
          // this.toastr.success("", res['data']['message']);
        } else {
          // this.toastr.error("", res['data']['message']);
        }
      },
      (err) => {
        console.log("Error creating new customer");
        console.log(err);
      }
    )
  }


}



export interface CResponse {
  Status: number,
  Message: string,
  Data: any
}
