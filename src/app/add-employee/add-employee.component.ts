import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Department } from '../department';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    city!: string;
    state!: string;
    status!: number;
    deptId!: number;
    department!: object;
    userID!: number;

    deptObj: Department[] | [] | undefined;

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(){

      this.route.paramMap.subscribe(params => {
        this.userID = +params.get('userId')!; 
      })

      this.fetchDepartment();
    }

    fetchDepartment(){
      this.authService.fetchDept().subscribe(
        response => {
          this.deptObj = response as Department[];
          console.log(this.deptObj);
        },
        error => {
          console.log(error);
        }
      )

    }

    onSubmit(){
      const empObj = {
        firstName : this.firstName,
        lastName:this.lastName,
        email : this.email,
        phone: this.phone,
        city: this.city,
        state: this.state,
        status: this.status,
        deptId: this.deptId,
        department: this.department,
        userID: this.userID
      }

      console.log(empObj);
      this.authService.addEmployee(empObj).subscribe(
        response => {
          console.log(response);
          this.router.navigate([`/employeeList/${this.userID}`]);
        },
        error => {console.log(error)}
      )  
    }
}
