import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFichetempsComponent } from './add-fichetemps.component';

describe('AddFichetempsComponent', () => {
  let component: AddFichetempsComponent;
  let fixture: ComponentFixture<AddFichetempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFichetempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFichetempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
