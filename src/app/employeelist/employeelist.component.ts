import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

  empList: Employee[] | [] | undefined;
  editEmp: Employee[]|undefined;
  userId?: number;


  ngOnInit(){

    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('userID')!;
    })
    

    this.getEmployeesList();
  }


  onClick(){
    console.log("Ruchir");
    this.router.navigate([`/addEmployee/${this.userId}`]);
  }

  getEmployeesList(){
    this.authService.getEmpList().subscribe(
      response => {
        this.empList = response.empList as Employee[];
        console.log(this.empList);
      },
      error => {
        console.log(error);
      }
    )
  }


  editEmployee(employeeId: number){
    this.authService.fetchEmployee(employeeId).subscribe(
      response => {
        this.editEmp = response as Employee[];
        console.log(this.editEmp)
        this.router.navigate([`/editEmployee/${employeeId}`]);
      },
      error => {console.log(error)}
    )
  }

  deleteEmployee(employeeId: number){
    console.log(employeeId);
    this.authService.fetchEmployee(employeeId).subscribe(
      response => {
        this.editEmp = response as Employee[];
        console.log(this.editEmp);
        this.router.navigate([`/deleteEmployee/${employeeId}`]);
      },
      error => {console.log(error)}
      
    )
  }
}
