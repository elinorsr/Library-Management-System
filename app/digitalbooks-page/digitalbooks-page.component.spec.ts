import { ComponentFixture, TestBed } from '@angular/core/testing';

import { digitalbookssPageComponent } from './digitalbooks-page.component';

describe('digitalbookssPageComponent', () => {
  let component: digitalbookssPageComponent;
  let fixture: ComponentFixture<digitalbookssPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [digitalbookssPageComponent]
    });
    fixture = TestBed.createComponent(digitalbookssPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
