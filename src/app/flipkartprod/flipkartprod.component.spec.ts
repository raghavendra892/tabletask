import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartprodComponent } from './flipkartprod.component';

describe('FlipkartprodComponent', () => {
  let component: FlipkartprodComponent;
  let fixture: ComponentFixture<FlipkartprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
