import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceymanPageComponent } from './Riceyman-page.component';

describe('RiceymanPageComponent', () => {
  let component: RiceymanPageComponent;
  let fixture: ComponentFixture<RiceymanPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceymanPageComponent]
    });
    fixture = TestBed.createComponent(RiceymanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
