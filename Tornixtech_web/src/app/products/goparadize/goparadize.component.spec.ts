import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoparadizeComponent } from './goparadize.component';

describe('GoparadizeComponent', () => {
  let component: GoparadizeComponent;
  let fixture: ComponentFixture<GoparadizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoparadizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoparadizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
