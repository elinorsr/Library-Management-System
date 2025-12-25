import { Component } from '@angular/core';
import { SearchService } from 'server/search.service';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})



export class SearchPageComponent {
  isSearchOpen: boolean = false;
  searchQuery!: string;
  searchResult: any[] =[];
  isSearching: boolean = false;
  alert: boolean = false;

  handleSearchClick(): void {
    if (!this.isSearching) {
      this.isSearching = true;
        const inputElement = document.querySelector('.input-search') as HTMLInputElement;
        if (inputElement) {
          inputElement.focus();
        }
      document.addEventListener('click', this.closeSearchBarOutsideClick);
    } 
    else if (this.searchQuery.trim() !== '') {
      this.searchResults();
    } 
  }
  
  closeSearchBar(): void {
    this.isSearching = false;
    this.searchQuery = ''; 
    document.removeEventListener('click', this.closeSearchBarOutsideClick);
  }
  
  closeSearchBarOutsideClick = (event: Event): void => {
    const searchBoxElement = document.querySelector('.search-box');
    if (searchBoxElement && !searchBoxElement.contains(event.target as Node)) {
      this.closeSearchBar();
    }
  }
  

  constructor(private searchService: SearchService) {}
  searchResults() {
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      this.searchService.search(this.searchQuery).subscribe(
        (response) => {
          this.searchResult = response;
          if(this.searchResult.length == 0){
            this.alert = !this.alert 
          }
          else{
            this.alert =false;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.searchResult = [];
    }
  }

 
  getStarsArray(rating: number): string[] {
    const starsArray: string[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      starsArray.push('fa-solid fa-star rating');
    }
  
    if (hasHalfStar) {
      starsArray.push('fa-solid fa-star-half-alt rating');
    }
  
    while (starsArray.length < 5) {
      starsArray.push('fa-regular fa-star');
    }
  
    return starsArray;
  }
}


