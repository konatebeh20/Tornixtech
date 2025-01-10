import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsyComponent } from './feedsy.component';

describe('FeedsyComponent', () => {
  let component: FeedsyComponent;
  let fixture: ComponentFixture<FeedsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedsyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
