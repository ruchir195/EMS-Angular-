import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
    constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router){}

    employeeId: number | null = null;
   // empObj: Employee | null = null;

    empObj : Employee = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      status: '',
      employeeId: 0,
      deptId:0,
      userID: 0,
      department: null!
    };


    ngOnInit(){
      

      this.route.paramMap.subscribe(params => {
        this.employeeId= +params.get('employeeId')!;
        console.log(this.employeeId);
      });

      this.fetchEmpDetails(this.employeeId!);
    }


    fetchEmpDetails(employeeId: number){
      console.log("empId: ",this.employeeId);

      this.authService.fetchEmployee(employeeId).subscribe(
        response => {
          this.empObj = response;
        },
        error => {console.log(error)}
        
      )
    }



    onSubmit(){
      this.authService.editEmployee(this.empObj).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employeeList']);
        },
        error => {
          console.log(error);
        }
      )
    }
}
