import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantItemComponent } from './consultant-item.component';

describe('ConsultantItemComponent', () => {
  let component: ConsultantItemComponent;
  let fixture: ComponentFixture<ConsultantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
