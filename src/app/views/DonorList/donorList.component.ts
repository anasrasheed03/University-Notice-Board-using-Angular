import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'donorList.component.html'
})
export class DonorListComponent implements OnInit {

  public userRole;
  public rowData;

  columnDefs = [
    { headerName: '#', field: 'id', sortable: true, filter: 'agTextColumnFilter', width: 70, lockPosition: true, suppressMenu: true },
    { headerName: 'Name', field: 'sub_Name', sortable: true, filter: 'agTextColumnFilter',width: 200, lockPosition: true, suppressMenu: true },
    { headerName: 'Email', field: 'sub_Code', sortable: true, filter: 'agTextColumnFilter', width: 200, lockPosition: true, suppressMenu: true },
    { headerName: 'Amount', field: 'sub_Code',  width: 200, lockPosition: true, suppressMenu: true},
    { headerName: 'Event Name', field: 'sub_Name', width: 200, lockPosition: true, suppressMenu: true },
    { headerName: 'Event Code', field: 'sub_Code', width: 200, lockPosition: true, suppressMenu: true },
  ];
  constructor(private http: HttpClient,private routr: Router,private toastr: ToastrService,) {

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

disableSubType(e){
  console.log(e)
  this.http.post("http://noticeboard.plenary-session.com/apis/" + "disableSubType.php", e).subscribe(
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

  getAllSubmission() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "subscriptionList.php").subscribe(
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


}



export interface CResponse {
  Status: number,
  Message: string,
  Data: any
}
