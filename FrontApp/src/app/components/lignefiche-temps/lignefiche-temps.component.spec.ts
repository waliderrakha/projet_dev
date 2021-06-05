import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneficheTempsComponent } from './lignefiche-temps.component';

describe('LigneficheTempsComponent', () => {
  let component: LigneficheTempsComponent;
  let fixture: ComponentFixture<LigneficheTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneficheTempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneficheTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
