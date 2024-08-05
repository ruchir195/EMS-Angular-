import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){}

  email?: string;
  password?: string;
  userId?: number;

  onSubmit(){
    this.authService.login(this.email, this.password).subscribe(
      response=>{
        console.log(response);
        this.userId = response.user.userID;
        this.router.navigate([`/employeeList/${this.userId}`]);
      },
      error=>{console.log(error)}
    )
  }
}
