import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { Register } from '../../shared-models/register';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './subscriberRegister.component.html',
  styleUrls: ['./subscriberRegister.component.scss']
})
export class SubscriberRegisterComponent implements OnInit {
  data = false;
  UserForm: any;
  massage: string;
  reg;

  constructor(private userForm: FormBuilder, 
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
    ) {
    
  }

  createForm() {
    this.UserForm = this.userForm.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      facultyId:['',Validators.required],
      designation:['',Validators.required],
      phoneNum:['',Validators.required]
    });
  }

  onFormSubmit() {
    const data = this.UserForm.value;
    this.Createemployee(data);
  }
  Createemployee(register:any) {
    this.loginService.CreateTeacherUser(register).subscribe(
      (res) => {
        if(res['data']['status']==201){
        this.data = true;
        this.massage = 'Data saved Successfully';
        this.toastr.success(res['data']['message']);
        this.UserForm.reset();
        this.router.navigate[('/login')]
        }else{
        this.toastr.error('','Error in registeration')
        }
      },
      err => {
        this.toastr.error('','Error in registeration, Email/Faculty ID already registered')
      }
      );
  }   


  ngOnInit() {
    this.createForm();
  }

}
