import { Component, OnInit } from '@angular/core';
import { bookservice } from 'server/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class booksPageComponent implements OnInit  {
[x: string]: any;
  books: any[] = [];

  constructor(private bookservice: bookservice) { }

  ngOnInit() {
    this.getbooks();
  }

  getbooks(): void {
    this.bookservice.getbooks()
      .subscribe((books: any[]) => this.books = books);
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
