import { Component, OnInit } from '@angular/core';
import {Phase} from '../../../model/phase.model';
import {Projet} from '../../../model/projet.model';
import {ProjetsServices} from '../../../services/projets.service';
import {PhasesServices} from '../../../services/phases.service';

@Component({
  selector: 'app-add-phase',
  templateUrl: './add-phase.component.html',
  styleUrls: ['./add-phase.component.scss']
})
export class AddPhaseComponent implements OnInit {
  public phase=new Phase();
  public projets?:Projet[];
  public projetId?:number;
  constructor(private projetService:ProjetsServices,
              private phaseService:PhasesServices) { }

  ngOnInit(): void {
  }

  createPhase() {

  }

  private getAllProjets() {


  }
}
