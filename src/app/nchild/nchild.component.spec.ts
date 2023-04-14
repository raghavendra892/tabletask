import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NchildComponent } from './nchild.component';

describe('NchildComponent', () => {
  let component: NchildComponent;
  let fixture: ComponentFixture<NchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
