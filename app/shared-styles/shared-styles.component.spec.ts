import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedStylesComponent } from './shared-styles.component';

describe('SharedStylesComponent', () => {
  let component: SharedStylesComponent;
  let fixture: ComponentFixture<SharedStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedStylesComponent]
    });
    fixture = TestBed.createComponent(SharedStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
