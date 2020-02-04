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
  selector: 'addStaff-component',
  templateUrl: './addStaff-components.html',
  // styleUrls: ['./addStaff-component.scss']
})

export class AddStaffComponent implements OnInit {

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
  public subTypes;
  public editCase: boolean = false;
  //public checkListNew;
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) {
      this.pageState = this.route.snapshot.params['pageState'];
      this.submissionID = this.route.snapshot.params['submissionID'];
      this.createForm();
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
    });
  }

  ngOnInit() {
    if (this.id != null) {
      this.getSubmissionDataByID();
      }
  }



  createForm() {
    this.simpleForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName:['', [Validators.required]],
      email: ['', [Validators.required]],
      staffId: ['', [Validators.required]],
      cnic: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password:['', [Validators.required]],
      jobTitle:['', [Validators.required]],
      department:['', [Validators.required]],

    });
  }


  onReset() {

    this.submitted = false;
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
    this.http.post("http://noticeboard.plenary-session.com/apis/" + "createStaff.php", { data: this.simpleForm.value }).subscribe(
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
    this.http.post("http://noticeboard.plenary-session.com/apis/" + "updateStaff.php", payload).subscribe(
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

    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getStaffByID.php?id=" + this.id).subscribe(
      (res) => {
        this.editCase= true;
         this.formData = res['data'];
          this.simpleForm.controls.firstName.patchValue(res['data'][0].f_name);
          this.simpleForm.controls.lastName.patchValue(res['data'][0].l_name);
          this.simpleForm.controls.cnic.patchValue(res['data'][0].cnic);
          this.simpleForm.controls.email.patchValue(res['data'][0].refKey);
          this.simpleForm.controls.staffId.patchValue(res['data'][0].staff_id);
          this.simpleForm.controls.fatherName.patchValue(res['data'][0].father_name);
          this.simpleForm.controls.phoneNo.patchValue(res['data'][0].contact_phone);
          this.simpleForm.controls.department.patchValue(res['data'][0].department);
          this.simpleForm.controls.address.patchValue(res['data'][0].address);
          this.simpleForm.controls.jobTitle.patchValue(res['data'][0].job_title);

      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )

  }


}



