import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  constructor(private authService:AuthService){}

  departmentName?: string;

  onSubmit(){
    this.authService.addDepartment(this.departmentName).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}
    )
  }
}
