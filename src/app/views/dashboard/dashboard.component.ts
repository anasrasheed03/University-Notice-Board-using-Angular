import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public totalTeacher:number = 0;
  public totalStudents:number = 0;
  public totalFaculty:number = 0;
  public totalNotifications:number = 0;
  today: number = Date.now();
  public studentData: any;
  public teacherData: any;
  public staffData: any;
  public notificationData: any;
  
  constructor(
    private http: HttpClient, private appComponent: AppComponent,private router: Router,
    ) {
  }

  public loginData: string;
  public userData: any;
  ngOnInit() {

    this.loginData = localStorage.getItem('id');
    this.getUserData(this.loginData);
    this.getTotalCountData();
    this.getAllRecentStudents();
    this.getAllRecentTeachers();
    this.getAllRecentStaff();
    this.getAllRecentNotifications();

  }

  openSubscriber(){
    this.router.navigate(['addCustomer']);
  }

  getUserData(login:string) {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getUserData.php?id="+ login).subscribe(
      (res) => {
         this.userData = res['data'];
         console.log(this.userData)
        
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )

  }
  
  getTotalCountData() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "totalCounts.php").subscribe(
      (res) => {
         this.totalFaculty = res['data'].facultyTotal;
         this.totalStudents = res['data'].StudentsTotal;
         this.totalTeacher = res['data'].TeacherTotal;
         this.totalNotifications = res['data'].NotificationTotal;
        
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )
  }

  getAllRecentStudents() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getRecentStudentList.php").subscribe(
      (res) => {
        if (res['length'] != 0) {
          this.studentData = res['data'];
        }
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )
  }

  getAllRecentNotifications() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getRecentNotificationList.php").subscribe(
      (res) => {
        if (res['length'] != 0) {
          this.notificationData = res['data'];
        }
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )
  }

  getAllRecentTeachers() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getRecentTeacherList.php").subscribe(
      (res) => {
        if (res['length'] != 0) {
          this.teacherData = res['data'];
        }
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )
  }

  getAllRecentStaff() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getRecentStaffList.php").subscribe(
      (res) => {
        if (res['length'] != 0) {
          this.staffData = res['data'];
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

