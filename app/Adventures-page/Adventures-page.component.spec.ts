import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventuresPageComponent } from './Adventures-page.component';

describe('AdventuresPageComponent', () => {
  let component: AdventuresPageComponent;
  let fixture: ComponentFixture<AdventuresPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdventuresPageComponent]
    });
    fixture = TestBed.createComponent(AdventuresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
