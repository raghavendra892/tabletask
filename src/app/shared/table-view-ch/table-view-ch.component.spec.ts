import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewChComponent } from './table-view-ch.component';

describe('TableViewChComponent', () => {
  let component: TableViewChComponent;
  let fixture: ComponentFixture<TableViewChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewChComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableViewChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
