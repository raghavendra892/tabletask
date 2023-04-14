import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTempRefComponent } from './table-temp-ref.component';

describe('TableTempRefComponent', () => {
  let component: TableTempRefComponent;
  let fixture: ComponentFixture<TableTempRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTempRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTempRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
