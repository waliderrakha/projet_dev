import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLigneficheComponent } from './add-lignefiche.component';

describe('AddLigneficheComponent', () => {
  let component: AddLigneficheComponent;
  let fixture: ComponentFixture<AddLigneficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLigneficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLigneficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
