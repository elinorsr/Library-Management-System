import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hopelessPageComponent } from './hopeless-page.component';

describe('hopelessPageComponent', () => {
  let component: hopelessPageComponent;
  let fixture: ComponentFixture<hopelessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hopelessPageComponent]
    });
    fixture = TestBed.createComponent(hopelessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
