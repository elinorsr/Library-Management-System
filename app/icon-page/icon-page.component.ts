import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'server/auth.service';


@Component({
  selector: 'app-icon-page',
  templateUrl: './icon-page.component.html',
  styleUrls: ['./icon-page.component.css']
})
export class iconPageComponent {

  constructor(private http: HttpClient, private router: Router, public  authService: AuthService) { }

  iconOptions: string[] = [
    '../../assets/icons/icon1.png',
    '../../assets/icons/icon2.png',
    '../../assets/icons/icon3.png',
    '../../assets/icons/icon4.png',
    '../../assets/icons/icon5.png',
    '../../assets/icons/icon6.png',
    '../../assets/icons/icon7.png',
    '../../assets/icons/icon8.png',
    '../../assets/icons/icon9.png',
    '../../assets/icons/icon10.png',
    '../../assets/icons/icon11.png',
    '../../assets/icons/icon12.png',
    '../../assets/icons/icon13.png',
  ];
  selectedicon: string = '';

  handleiconSelection(icon: string): void {
    this.selectedicon = icon;
    // Call your function to update the icon in the database
    this.updateiconInDatabase(icon);
  }

  updateiconInDatabase(icon: string): void {

    const username = this.authService.getUserId();
    const  url = 'http://localhost:3000/icon'; 

    const iconData = {
      username: username,
      icon: icon
    };
    console.log('Received parameters:', username, icon);
    this.http.post(url, iconData).subscribe(
      (response: any) => {
        console.log('icon update successful:', response);
        this.router.navigateByUrl('/').then(() => {
          // Refresh the page
          location.reload();
        });
      },
      (error: any) => {
        console.error('Error updating icon:', error);
        // Handle error case
      }
    );
  }
  }


