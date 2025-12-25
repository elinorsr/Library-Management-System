import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaybeaybePageComponent } from './maybe-page.component';

describe('maybePageComponent', () => {
  let component: MaybeaybePageComponent;
  let fixture: ComponentFixture<MaybeaybePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaybeaybePageComponent]
    });
    fixture = TestBed.createComponent(MaybeaybePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
