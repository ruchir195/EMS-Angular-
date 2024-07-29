import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userName?: String;
  email: String | undefined;
  password?: String;
  phone?: String;

  constructor(private authService: AuthService){}

  onSubmit(){
    console.log(this.userName)
    console.log(this.email)
    console.log(this.password)
    console.log(this.phone)
    const signupObj ={
      userName: this.userName,
      email: this.email,
      password: this.password,
      phone:this.phone
    }

    this.authService.signup(signupObj).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}
    );
  }
  

}
