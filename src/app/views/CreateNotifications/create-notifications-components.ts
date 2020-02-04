import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { PageState } from '../../utilities/interfaces';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ModalDirective } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
import { MatDialog } from '@angular/material';
import { CommonHelper } from '../../utilities/common.helper';


@Component({
  selector: 'create-notifications-component',
  templateUrl: './create-notifications-components.html',
  styleUrls: ['./create-notifications-component.scss']
})

export class CreateNotificationsComponent implements OnInit {

  public selectedCheckListCheckbox: any = {};
  public selectedCheckListFormBuilderCheckbox: any = {};
  public checklist: any = {};
  public customChecklist: any = {};
  public projectList: any = [];
  public reviewerList: any = [];
  public coderList: any = [];
  public customHeadingList: any = [];
  public versionControlList: any = [];
  public simpleForm: FormGroup;
  public submitted = false;
  public pageState: PageState;
  public submissionID: number;
  public readMode: boolean = true;
  public masterSelected: boolean = false;
  public spinnerMode: boolean = false;
  public primaryModal: ModalDirective;
  public HiddenButton: boolean = true;
  public projectDropDown: boolean = true;
  public reviewerDropDown: boolean = true;
  public versionDropDown: boolean = true;
  public coderDropDown: boolean = true;
  public frameworkDropDown: boolean = true;
  public addCheckList: boolean = true;
  public frameworkId: number;
  public formData;
  public id = null;
  public entityTypes;
  public menuList;
  public notifcationType;
  private fileExt: string = 'jpg, jpeg, png';
  private maxSize: number = 2045;
  private selectedFilePayload: any;
  private attachmentBase64: string;
  policies: any ;
  public userData: any;
  public loginData: string;
  public todaysDate:any = new Date();
  //public checkListNew;
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router,private dialog: MatDialog) {
    this.pageState = this.route.snapshot.params['pageState'];
    this.submissionID = this.route.snapshot.params['submissionID'];
    this.createForm();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
  }

  ngOnInit() {
    this.createForm();
    if (this.id != null) {
      this.getSubmissionDataByID();
      }
    this.loginData = localStorage.getItem('id');
    this.getUserData(this.loginData);
    this.notifcationType = [
      {value: "Holiday Notification", name: "Holiday Notification"},
      {value: "Emergency Notification", name: "Emergency Notification"},
      {value: "Event Notification", name: "Event Notification"},
      {value: "Papers Notification", name: "Papers Notification"},
      {value: "Fees Notification", name: "Fees Notification"}, 
      {value: "Cancel Class Notification", name: "Cancel Class Notification"}, 
      {value: "Admit Card Issuance Notification", name: "Admit Card Issuance Notification"}, 

  ];
  }



  createForm() {
    this.simpleForm = this.fb.group({
      notification_name: ['', [Validators.required]],
      notification_code: ['', [Validators.required]],
      notification_Type: ['', [Validators.required]],
      notification_message:['',[Validators.required]],
      notification_date:['',[Validators.required]]
    });
    
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

  onReset() {

    this.submitted = false;
    this.selectedCheckListCheckbox = {};
    this.simpleForm.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.simpleForm.invalid) {
      return;
    } else {
        this.postSubmission();
    }

  }  

  
  postSubmission() {
    this.simpleForm.value.email = this.userData.email;
    this.simpleForm.value.fname = this.userData.fname;
    this.simpleForm.value.lname = this.userData.lname;
    this.simpleForm.value.picture = this.selectedFilePayload;
    if(this.id == null){
    this.http.post("http://noticeboard.plenary-session.com/apis/" + "createNotification.php", { data: this.simpleForm.value }).subscribe(
      (res) => {
        if (res['data']['status'] == 201) {
          this.onReset();
          this.toastr.success("", res['data']['message']);
          this.router.navigate(['/dashboard'])
        } else {
          this.toastr.error("", res['data']['message']);
        }
      },
      (err) => {
        console.log("Error creating new customer");
        console.log(err);
      }
    )
  }else{
    let id = {id: this.id}
    let picture = {picture: this.selectedFilePayload}
    let payload = Object.assign(this.simpleForm.value, id, picture)
    this.http.post("http://noticeboard.plenary-session.com/apis/" + "updateNotification.php", payload).subscribe(
      (res) => {
        if (res['data']['status'] == 201) {
          this.onReset();
          this.toastr.success("", res['data']['message']);
          this.router.navigate(['/dashboard'])
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

  getSubmissionDataByID() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getNotificationById.php?id=" + this.id).subscribe(
      (res) => {
         this.formData = res['data'];
          this.simpleForm.controls.notification_Type.patchValue(res['data'][0].notification_type);
          this.simpleForm.controls.notification_code.patchValue(res['data'][0].notification_code);
          this.simpleForm.controls.notification_name.patchValue(res['data'][0].notification_name);
          this.simpleForm.controls.notification_message.patchValue(res['data'][0].notification_message);
          this.simpleForm.controls.notification_date.patchValue(res['data'][0].notification_date);
         

      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )

  }


  public async changeFileSelection(e: FileList) {

    const file = e[0];
    if (this.isValidFile(file)) {
      await this.setAttachmentsPayload(file);
      this.uploadAttachment();
    }

  }

  // public msgPopup(heading, content, className): void {
  //   const confirmationDialogRef = this.dialog.open(ModalComponent, {
  //     data: { header: heading, content: content, buttons: ['Ok'] },
  //     panelClass: className
  //   });
  // }

  private isValidFile(file) {
    const extensions = (this.fileExt.split(',')).map(function (x) { return x.toLocaleLowerCase().trim(); }); // array of extensions
    const ext = file.name.toLowerCase().split('.').pop() || file.name; // file extension
    const fileSizeinKB = file.size / 1024;

    if (extensions.indexOf(ext) === -1) {
      // this.msgPopup('Error', 'Error in uploading ' + file.name + ' due to invalid file type.','alert-error-popup')
      return false;
    } else if (!file.name.match(/^[0-9_a-z-A-Z ... ]+$/)) {
      // this.msgPopup('Error', 'Invalid File Name','alert-error-popup')
      return false;
    } else if (fileSizeinKB > this.maxSize) {
      // this.msgPopup('Error', file.name + ' ( ' + (fileSizeinKB / 1024).toFixed(2) + 'MB )' + ' exceeds file size limit of ' + (this.maxSize / 1024).toFixed(2) + 'MB.','alert-error-popup')
      return false;
    }
    return true;
  }

  private async setAttachmentsPayload(file) {
    console.log(file)
    this.attachmentBase64 = 'data:' + file.type + ';base64,' + (await this.convertFileToBase64(file)).toString();
  }

  private uploadAttachment() {
    this.selectedFilePayload = '';
    this.selectedFilePayload = this.attachmentBase64;
    let payload = {
      picture: this.selectedFilePayload
    }
    // this.http.post("http://noticeboard.plenary-session.com/apis/" + "updateNotification.php", payload).subscribe(
    //   (res) => {         
    //     },
    //     (err) => {
    //       console.log(err)
    //     }
    //   )
  }

  private convertFileToBase64(file): any {
    return new Promise((resolve, reject) => {
      CommonHelper.convertFileToBase64(file).then((result) => {
        resolve(result);
      })
        .catch(function (error) {
          console.log(error)
          resolve(null);
        })
    })
  }


}

