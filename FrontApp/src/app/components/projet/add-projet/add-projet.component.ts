import { Component, OnInit } from '@angular/core';
import {Projet} from '../../../model/projet.model';
import {ProjetsServices} from '../../../services/projets.service';
import {ClientsService} from '../../../services/clients.service';
import {Client} from '../../../model/client.model';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {
  public projet=new Projet();
  public  clients?:Client[];
  constructor(private projetService:ProjetsServices,
              private clientsService:ClientsService) { }

  ngOnInit(): void {
    this.ongetAllClients();
  }

  createProjet() {
    this.projetService.save(this.projet).subscribe(
      data=>{
        alert("Success Saving Projet");}
    );

  }

  private ongetAllClients() {
    this.clientsService.findAllClients().subscribe(
      data=>{
        this.clients=data;
        console.log(this.clients);
      },error => {
        console.log(error);}
    )


  }

  don($event: Event) {

  }
}
