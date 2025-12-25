import { Component, OnInit } from '@angular/core';
import { AuthService } from 'server/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit  {
  isDropdownOpen: boolean = false;
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(public  authService: AuthService) { }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    // Call the logout method from the AuthService
    this.authService.logout();
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.authService.retrieveIconFromDatabase();
    }
  }
  
}
