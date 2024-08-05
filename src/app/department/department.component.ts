import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  constructor(private authService:AuthService, private router: Router){}

  departmentName?: string;

  onSubmit(){
    this.authService.addDepartment(this.departmentName).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/employeeList']);
      },
      error => {console.log(error)}
    )
  }
}
