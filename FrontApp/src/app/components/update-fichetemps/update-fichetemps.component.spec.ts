import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFichetempsComponent } from './update-fichetemps.component';

describe('UpdateFichetempsComponent', () => {
  let component: UpdateFichetempsComponent;
  let fixture: ComponentFixture<UpdateFichetempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFichetempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFichetempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
