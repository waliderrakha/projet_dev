import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPhaseComponent } from './projet-phase.component';

describe('ProjetPhaseComponent', () => {
  let component: ProjetPhaseComponent;
  let fixture: ComponentFixture<ProjetPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
