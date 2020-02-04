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


@Component({
  selector: 'add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})

export class AddStudentComponent implements OnInit {

  public subTypes;
  public formData;
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
  public editCase: boolean = false;
  public semesterList: any = [
    {value:'1nd', label:'1st Semester'},
    {value:'2nd', label:'2nd Semester'},
    {value:'3rd', label:'3rd Semester'},
    {value:'4th', label:'4th Semester'},
    {value:'5th', label:'6th Semester'},
    {value:'6th', label:'6th Semester'},
    {value:'7th', label:'7th Semester'},
    {value:'8th', label:'8th Semester'},
    {value:'9th', label:'9th Semester'},
    {value:'10th', label:'10th Semester'},

  ]
  public id=null;
  //public checkListNew;
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) {
    this.pageState = this.route.snapshot.params['pageState'];
    this.submissionID = this.route.snapshot.params['submissionID'];
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
  }

  ngOnInit() {
    this.createForm();
    if (this.id != null) {
    this.getSubmissionDataByID();
    }
  }

  createForm() {
    this.simpleForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName:['', [Validators.required]],
      semester:['', [Validators.required]],
      studentEmail: ['', [Validators.required]],
      cmsId: ['', [Validators.required]],
      rollNo: ['', [Validators.required]],
      student_contactPerson: ['', [Validators.required]],
      studentPhone: ['', [Validators.required]],
      studentAddress: ['', [Validators.required]],
      password:['', [Validators.required]],
    });
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
    if(this.id == null){
    this.http.post("http://noticeboard.plenary-session.com/apis/" + "createStudent.php", { data: this.simpleForm.value }).subscribe(
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
    let payload = Object.assign(this.simpleForm.value, id)
    this.http.post("http://noticeboard.plenary-session.com/apis/" + "updateStudent.php", payload).subscribe(
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

    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getStudentByID.php?id=" + this.id).subscribe(
      (res) => {
        this.editCase= true;
         this.formData = res['data'];
          this.simpleForm.controls.firstName.patchValue(res['data'][0].f_name);
          this.simpleForm.controls.lastName.patchValue(res['data'][0].l_name);
          this.simpleForm.controls.rollNo.patchValue(res['data'][0].roll_number);
          this.simpleForm.controls.studentEmail.patchValue(res['data'][0].refKey);
          this.simpleForm.controls.cmsId.patchValue(res['data'][0].cms_id);
          this.simpleForm.controls.semester.patchValue(res['data'][0].semesterNum);
          this.simpleForm.controls.student_contactPerson.patchValue(res['data'][0].father_name);
          this.simpleForm.controls.studentPhone.patchValue(res['data'][0].contact_phone);
          this.simpleForm.controls.studentAddress.patchValue(res['data'][0].address);
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )

  }
}


