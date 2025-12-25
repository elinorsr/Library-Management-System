import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemistPageComponent } from './Alchemist-page.component';

describe('AlchemistPageComponent', () => {
  let component: AlchemistPageComponent;
  let fixture: ComponentFixture<AlchemistPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlchemistPageComponent]
    });
    fixture = TestBed.createComponent(AlchemistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
