import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) 
  { 

  }

  private baseURL: string = "https://localhost:7246/api"

  signup(signupObj: object):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/User/signup`,signupObj)
  }


  login(email:string|undefined, password:string|undefined):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/User/login`,{email, password});
  }


  addDepartment(departmentName: string|undefined):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/Department/addDepartment`,{departmentName});
  }


  addEmployee(empObj: Object):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/Employee/addEmployee`, empObj);
  }


  getEmpList():Observable<any>{
    return this.http.get<any>(`${this.baseURL}/Employee/employeeList`);
  }

  fetchEmployee(empId: number|undefined ):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/Employee/empEdit`, empId);
  }

  editEmployee(empObj: object):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/Employee/employeeEdit`,empObj);
  }


  deleteEmployee(empObj: object):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/Employee/deleteEmployee`,empObj);
  }


  fetchDept():Observable<any>{
    return this.http.get<any>(`${this.baseURL}/Employee/getDepartment`);
  }
}

