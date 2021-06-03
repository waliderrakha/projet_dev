import {Component, OnInit} from '@angular/core';
import {Phase} from '../../../model/phase.model';
import {Projet} from '../../../model/projet.model';
import {ProjetsServices} from '../../../services/projets.service';
import {PhasesServices} from '../../../services/phases.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-phase',
  templateUrl: './add-phase.component.html',
  styleUrls: ['./add-phase.component.scss']
})
export class AddPhaseComponent implements OnInit {
  public phase = new Phase();
  public projets?: Projet[];
  public projetId?: number;
  phaseFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private projetService: ProjetsServices,
              private phaseService: PhasesServices,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.phaseFormGroup = this.fb.group({
      titre: ["", Validators.required],
      code: ["", Validators.required],
      dateDebut: ["", Validators.required],
      dateFin: ["", Validators.required],
      nbrJour: [0, Validators.required],
      desc: ["", Validators.required],
      projetId: ["", Validators.required],

    });
    this.getAllProjets();
  }

  createPhase() {
    console.log(this.projetId);
    this.submitted = true;
    if (this.phaseFormGroup?.invalid) return;
    //affecter une valeur a un attribut
    //this.consultantFormGroup?.value.email="dddd";
    this.phase.code = this.phaseFormGroup?.value.code;
    this.phase.nbrJour = this.phaseFormGroup?.value.nbrJour;
    this.phase.desc = this.phaseFormGroup?.value.desc;
    this.phase.titre = this.phaseFormGroup?.value.titre;
    this.phase.dateDebut = this.phaseFormGroup?.value.dateDebut;
    this.phase.dateFin = this.phaseFormGroup?.value.dateFin;
    console.log("èèèèèèèèèèèèèèèèèèèèè")
    console.log(this.phase);

    // @ts-ignore
    this.phaseService.createPhaseProjet(this.phase, this.phaseFormGroup?.value.projetId).subscribe(data => {
      alert("Success Saving Phase");
    });

  }

  private getAllProjets() {
    this.projetService.getAllProjet().subscribe(
      data => {
        this.projets = data;
        console.log(this.projets);

      },
      error => {
        console.log(error);
      }
    )


  }
}
