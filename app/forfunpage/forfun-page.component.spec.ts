import { ComponentFixture, TestBed } from '@angular/core/testing';
import { forfunPageComponent } from './forfun-page.component';

describe('forfunPageComponent', () => {
  let component: forfunPageComponent;
  let fixture: ComponentFixture<forfunPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [forfunPageComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(forfunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
