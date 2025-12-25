import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  fullName!: string;
  userName!: string;
  email!: string;
  password!: string;
  isFormValid: boolean = true;
  isEmailValid: boolean = true;
  signupStatus: string = '';
confirmEmail: any;
isEmailMatching: any;
isPasswordStrong: any;

  constructor(private http: HttpClient, private router: Router) { }


  signup() {
    this.isFormValid = true;
    this.isEmailValid = true;

    if (!this.fullName || !this.userName || !this.email || !this.password) {
      this.isFormValid = false;
      return;
    }

    // Check email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.isEmailValid = false;
      return;
    }

    const url = 'http://localhost:3000/signup';
    const singupData = {
      userName: this.userName,
      password: this.password,
      fullName: this.fullName,
      email: this.email 
    };

   

    this.http.post(url, singupData).subscribe(
      (response: any) => {
        // Signup successful
        console.log(response.message);
        this.router.navigate(['/login']);
      },
      (error: any) => {
        // Error occurred during signup
        console.error(error);
        if (error.error && error.error.error === 'Username already exists') {
          this.signupStatus = 'Username already exists';
        } else {
          this.signupStatus = 'An error occurred during signup';
        }
      }
    );
  }
}