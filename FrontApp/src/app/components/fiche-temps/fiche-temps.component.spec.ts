import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheTempsComponent } from './fiche-temps.component';

describe('FicheTempsComponent', () => {
  let component: FicheTempsComponent;
  let fixture: ComponentFixture<FicheTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheTempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
