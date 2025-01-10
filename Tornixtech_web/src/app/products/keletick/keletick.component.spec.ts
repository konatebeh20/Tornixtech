import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeletickComponent } from './keletick.component';

describe('KeletickComponent', () => {
  let component: KeletickComponent;
  let fixture: ComponentFixture<KeletickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeletickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeletickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
