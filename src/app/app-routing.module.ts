import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DepartmentComponent } from './department/department.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component:LoginComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'addEmployee/:userId', component: AddEmployeeComponent},
  {path: 'employeeList/:userID', component: EmployeelistComponent},
  {path: 'editEmployee/:employeeId',component: EditEmployeeComponent},
  {path: 'deleteEmployee/:employeeId', component: DeleteEmployeeComponent},
  {path: 'employeeList', component: EmployeelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
