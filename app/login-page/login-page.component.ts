import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'server/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
isEmailValid: any;
email: any;
isEmailMatching: any;
signup() {
throw new Error('Method not implemented.');
}
  userName!: string;
  password!: string;
  isFormValid: boolean = true;
  loginStatus: string = '';

  constructor(private http: HttpClient, private router: Router, public  authService: AuthService) { }
  login() {
    this.isFormValid = true; 
    this.loginStatus = ''; 
    if (!this.userName || !this.password) {
      this.isFormValid = false;
      return;
    }

    const url = 'http://localhost:3000/login';
    const loginData = {
      userName: this.userName,
      password: this.password
    };

    this.http.post(url, loginData).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Handle the successful response
        // Redirect to the home page
        this.authService.login(this.userName);
        this.authService.retrieveIconFromDatabase();
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        // Error occurred during login
        console.error(error);
        console.log(error.error); // Log the error response from the server
        if (error.status ) {
          this.loginStatus = 'Invalid username or password';
        }
      }
    );
  }
}