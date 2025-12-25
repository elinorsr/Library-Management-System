import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisiblePageComponent } from './Invisible-page.component';

describe('InvisiblePageComponent', () => {
  let component: InvisiblePageComponent;
  let fixture: ComponentFixture<InvisiblePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvisiblePageComponent]
    });
    fixture = TestBed.createComponent(InvisiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
