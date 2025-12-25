import { Component, OnInit } from '@angular/core';
import { digitalbooksService } from 'server/digitalbooks.service';

@Component({
  selector: 'app-digitalbooks-page',
  templateUrl: './digitalbooks-page.component.html',
  styleUrls: ['./digitalbooks-page.component.css']
})
export class digitalbookssPageComponent implements OnInit  {
  digitalbookss: any[] = [];

  constructor(private digitalbooksService: digitalbooksService) { }

  ngOnInit() {
    this.getdigitalbooks();
  }

  getdigitalbooks(): void {
    this.digitalbooksService.getdigitalbooks()
      .subscribe(digitalbookss => this.digitalbookss = digitalbookss);
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
