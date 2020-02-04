import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './blockStudentList.component.html'
})

export class BlockStudentListComponent implements OnInit {

  public userRole;
  public rowData;

  columnDefs = [
    { headerName: '#', field: 'id', sortable: true, filter: 'agTextColumnFilter', lockPosition: true, suppressMenu: true },
    { headerName: 'First Name', field: 'f_name', sortable: true, filter: 'agTextColumnFilter', lockPosition: true, suppressMenu: true },
    { headerName: 'Last Name', field: 'l_name', sortable: true, filter: 'agTextColumnFilter', lockPosition: true, suppressMenu: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: 'agTextColumnFilter', lockPosition: true, suppressMenu: true },
    { headerName: 'Username', field: 'username', sortable: true, filter: 'agTextColumnFilter', lockPosition: true, suppressMenu: true },
    { headerName: 'Action', field: 'ACTION', cellRenderer: "editButton", width: 150, lockPosition: true, suppressMenu: true, pinned: "right" },
    { headerName: 'UnBlock', field: 'delete', cellRenderer: "deleteButton", width: 150, lockPosition: true, suppressMenu: true, pinned: "right" },
  ];
  constructor(private http: HttpClient, private routr: Router,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getAllSubmission();
  }


  display(e) {
    let selectedRowsLength = e.length - 1

  }

  editUserDetails(e){
    this.routr.navigate(['/student'], { queryParams: { id: e.id } });
}

  getAllSubmission() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getBlockStudentList.php").subscribe(
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
  deleteSubscriber(e){
  let payload = {
      id: e.id
  }
  this.http.post("http://noticeboard.plenary-session.com/apis/" + "activeStudent.php", payload).subscribe(
    (res) => {
      if (res['data']['status'] == 201) {
        this.toastr.success("", res['data']['message']);
      } else {
        this.toastr.error("", res['data']['message']);
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
