import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashdashComponent } from './cashdash.component';

describe('CashdashComponent', () => {
  let component: CashdashComponent;
  let fixture: ComponentFixture<CashdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
