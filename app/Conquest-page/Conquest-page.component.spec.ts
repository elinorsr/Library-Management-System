import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConquestPageComponent } from './Conquest-page.component';

describe('ConquestPageComponent', () => {
  let component: ConquestPageComponent;
  let fixture: ComponentFixture<ConquestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConquestPageComponent]
    });
    fixture = TestBed.createComponent(ConquestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
