import { ComponentFixture, TestBed } from '@angular/core/testing';

import { iconPageComponent } from './icon-page.component';

describe('iconPageComponent', () => {
  let component: iconPageComponent;
  let fixture: ComponentFixture<iconPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [iconPageComponent]
    });
    fixture = TestBed.createComponent(iconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
