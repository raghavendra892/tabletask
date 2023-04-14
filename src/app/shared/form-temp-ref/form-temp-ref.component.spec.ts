import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTempRefComponent } from './form-temp-ref.component';

describe('FormTempRefComponent', () => {
  let component: FormTempRefComponent;
  let fixture: ComponentFixture<FormTempRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTempRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTempRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
