import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { FormsModule } from '@angular/forms';
import { Login } from '../../shared-models/loginclass';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginForm: any;
  constructor(private router: Router, private LoginForm: FormBuilder,
    private loginService: LoginService, private toastr: ToastrService,
    private appComponent: AppComponent
  ) {

  }


  model: any = {};
  data = false;
  massage;

  loginform() {
    this.loginForm = this.LoginForm.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onFormSubmit() {
    const data = this.loginForm.value;
    this.Login(data);
    console.log(data);
  }
  Login(login: Login) {
    this.loginService.Login(login).subscribe(
      (res) => {
        console.log(res);
        if(res['data']['status']==201){
        this.data = true;
        this.appComponent.getLoginData(res['data'].id)
        localStorage.setItem('id',res['data'].id);
        this.massage = 'Data saved Successfully';
        this.router.navigate(['dashboard']);
      }else{
        this.toastr.error('', res['data']['message']);
      }
      });
  }
  // login(data) {
  //   if (this.loginForm.valid) {
  //     setTimeout(() => {
  //       this.router.navigate(['dashboard'])
  //     }, 1000);

  //   }
  // }
  ngOnInit() {
    this.loginform();
  }



  // login() {
  //   debugger;
  //   this.loginService.Login(this.model).subscribe(
  //     result => {
  //       debugger;
  //       if (result.Status == "Success") {
  //         this.router.navigate(['/home']);
  //         debugger;
  //       }
  //       else {
  //         this.errorMessage = result.Message;
  //       }
  //     },
  //     error => {
  //       this.errorMessage = error.message;
  //     });
  // };    
}
