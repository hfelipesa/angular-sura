import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipografiaComponent } from './tipografia.component';

describe('TipografiaComponent', () => {
  let component: TipografiaComponent;
  let fixture: ComponentFixture<TipografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
