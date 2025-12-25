import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecatPageComponent } from './Thecat-page.component';

describe('ThecatPageComponent', () => {
  let component: ThecatPageComponent;
  let fixture: ComponentFixture<ThecatPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThecatPageComponent]
    });
    fixture = TestBed.createComponent(ThecatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
