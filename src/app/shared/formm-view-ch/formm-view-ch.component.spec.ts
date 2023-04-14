import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmViewChComponent } from './formm-view-ch.component';

describe('FormmViewChComponent', () => {
  let component: FormmViewChComponent;
  let fixture: ComponentFixture<FormmViewChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmViewChComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormmViewChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
