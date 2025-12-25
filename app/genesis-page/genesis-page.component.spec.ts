import { ComponentFixture, TestBed } from '@angular/core/testing';

import { genesisPageComponent } from './genesis-page.component';

describe('genesisPageComponent', () => {
  let component: genesisPageComponent;
  let fixture: ComponentFixture<genesisPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [genesisPageComponent]
    });
    fixture = TestBed.createComponent(genesisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
