import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
