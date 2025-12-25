import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorPageComponent } from './collector-page.component';

describe('collectorPageComponent', () => {
  let component: CollectorPageComponent;
  let fixture: ComponentFixture<CollectorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorPageComponent]
    });
    fixture = TestBed.createComponent(CollectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
