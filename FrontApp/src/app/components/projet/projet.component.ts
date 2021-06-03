import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjetsServices} from "../../services/projets.service";
import {Projet} from "../../model/projet.model";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  public ps:any;
  phases:any;
  constructor(private projetService:ProjetsServices,private router:Router) {
  }

  ngOnInit(): void {
  }
  onGetAllProjets() {
    this.ps =this.projetService.getAllProjet().subscribe(
      data=>{
        this.ps=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  onSearch(value: any) {

  }

  onPhase(projet: Projet) {
    this.router.navigateByUrl("/projetphase/"+projet.id)
  }

  onDetail(p: any) {
    this.router.navigateByUrl("/detailprojet/"+p.id)
  }
}
