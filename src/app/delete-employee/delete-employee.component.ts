import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router){}

  employeeId : number | null = null;

  empObj : Employee = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    status: '',
    employeeId: 0,
    deptId: 0,
    userID: 0,
    department: null!
  };

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.employeeId = +params.get('employeeId')!;
    });

    this.fetchEmployee(this.employeeId!);
  }


  fetchEmployee(employeeId: number){
      this.authService.fetchEmployee(employeeId).subscribe(
        response => {
          this.empObj = response;
          console.log(this.empObj);
        },
        error => {
          console.log(error);
        }
      )
  }

  onSubmit(){
    this.authService.deleteEmployee(this.empObj).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/employeeList']);
      },
      error => {
        console.log(error)
      }
    )
  }
}
