import { ComponentFixture, TestBed } from '@angular/core/testing';

import { booksPageComponent } from './books-page.component';

describe('booksPageComponent', () => {
  let component: booksPageComponent;
  let fixture: ComponentFixture<booksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [booksPageComponent]
    });
    fixture = TestBed.createComponent(booksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
