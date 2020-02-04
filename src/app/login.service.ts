import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { Register } from './shared-models/register';
import { Login } from './shared-models/loginclass';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  register: Register[];
  Url: string;
  token: string;
  header: any;
  login: Login[];

  constructor(private http: HttpClient) {
    this.Url = 'http://noticeboard.plenary-session.com/apis/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

   }
   
  
  Login(login: Login): Observable<Login[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Login[]>
      (this.Url + '/login.php',{data: login},  httpOptions)

  } 
  
  
  CreateStudentUser(register: Register): Observable<Register[]> {
    console.log(register);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>
      (this.Url + '/studentRegister.php', { data: register }, httpOptions)
    
  }  

  CreateTeacherUser(register: Register): Observable<Register[]> {
    console.log(register);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>
      (this.Url + '/teacherRegister.php', { data: register }, httpOptions)
    
  }  

  CreateFacultyUser(register: Register): Observable<Register[]> {
    console.log(register);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>
      (this.Url + '/facultyRegister.php', { data: register }, httpOptions)
    
  }  
}