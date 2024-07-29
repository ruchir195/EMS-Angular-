import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  email?: string;
  password?: string;

  onSubmit(){
    this.authService.login(this.email, this.password).subscribe(
      response=>{console.log(response)},
      error=>{console.log(error)}
    )
  }
}
