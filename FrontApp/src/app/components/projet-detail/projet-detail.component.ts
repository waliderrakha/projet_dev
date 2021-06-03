import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientsService} from "../../services/clients.service";
import {ProjetsServices} from "../../services/projets.service";
import {Client} from "../../model/client.model";
import {Projet} from "../../model/projet.model";

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.scss']
})
export class ProjetDetailComponent implements OnInit {
  isReadMore = true

  showText() {
    this.isReadMore = !this.isReadMore
  }
  projetId:number;
  projet?:Projet;
  constructor(private activatedRoute:ActivatedRoute,
              private projetsService:ProjetsServices) {this.projetId=activatedRoute.snapshot.params.id; }

  ngOnInit(): void {
    this.projetsService.getProjet(this.projetId).subscribe(
      data=>
      {this.projet=data;
        console.log(this.projet);
        console.log("(((((((")
        console.log(data);
      }, error => {
        console.log(error)
      }
    )
  }

}
