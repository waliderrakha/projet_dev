import {Component, OnInit} from '@angular/core';
import {Projet} from '../../../model/projet.model';
import {ProjetsServices} from '../../../services/projets.service';
import {ClientsService} from '../../../services/clients.service';
import {Client} from '../../../model/client.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {
  public projet = new Projet();
  public clients?: Client[];
  projetFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private projetService: ProjetsServices,
              private clientsService: ClientsService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      titre: ["", Validators.required],
      dateDebut: ["", Validators.required],
      dateFin: ["", Validators.required],
      dateReception: ["", Validators.required],
      type: ["", Validators.required],
      budget: [0, Validators.required],
      desc: ["", Validators.required],
      clientId: [0, Validators.required],

    });
    this.ongetAllClients();
  }

  createProjet() {
    this.submitted = true;
    if (this.projetFormGroup?.invalid) return;
    this.projet = this.projetFormGroup?.value;
    this.projetService.save(this.projet).subscribe(
      data => {
        alert("Success Saving Projet");
      }
    );

  }

  private ongetAllClients() {
    this.clientsService.findAllClients().subscribe(
      data => {
        this.clients = data;
        console.log(this.clients);
      }, error => {
        console.log(error);
      }
    )


  }

  don($event: Event) {

  }
}
