import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'notificationList.component.html'
})
export class NotificationListComponent implements OnInit {
  public loginData: string;
  public userData: any;
  public userRole;
  public rowData;

  columnDefs = [

  ];
  constructor(private http: HttpClient,private routr: Router,private toastr: ToastrService,) {

  }

  ngOnInit(): void {
    this.loginData = localStorage.getItem('id');
    this.getUserData(this.loginData);
  }


  display(e) {
    let selectedRowsLength = e.length - 1
    console.log(e[selectedRowsLength])

  }

  editUserDetails(e){
    this.routr.navigate(['/notifications'], { queryParams: { id: e.id } });
}


  getAllSubmission() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getNotificationList.php").subscribe(
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

  getUserData(login:string) {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getUserData.php?id="+ login).subscribe(
      (res) => {
         this.userData = res['data'];
         this.columnDefs = this.initGridColumns();
          if (this.userData != undefined && this.userData['role'] == 3) {
            this.columnDefs.splice(5, 1);
            console.log(this.columnDefs)            
          }
          this.getAllSubmission();

        
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )

  }

  private initGridColumns() {
    return [
      { headerName: 'Name', field: 'notification_name', sortable: true, filter: 'agTextColumnFilter', lockPosition: true, suppressMenu: true },
      { headerName: 'Type', field: 'notification_type', sortable: true, filter: 'agTextColumnFilter', lockPosition: true, suppressMenu: true },
      { headerName: 'Notification Message', field: 'notification_message', width: 300, lockPosition: true, suppressMenu: true },
      { headerName: 'Notification Date', field: 'notification_date',  lockPosition: true, suppressMenu: true },
      { headerName: 'Notifier Name', field: 'notifier_name', lockPosition: true, suppressMenu: true },
      { headerName: 'Action', field: 'ACTION', cellRenderer: "editButton", width: 150, lockPosition: true, suppressMenu: true, pinned: "right" }
    ]
    }


}

