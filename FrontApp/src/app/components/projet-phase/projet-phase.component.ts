import { Component, OnInit } from '@angular/core';
import {ProjetsServices} from "../../services/projets.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projet-phase',
  templateUrl: './projet-phase.component.html',
  styleUrls: ['./projet-phase.component.scss']
})
export class ProjetPhaseComponent implements OnInit {
  phases:any;
  projetId:number;
  projet:any;
  constructor(private projetService:ProjetsServices,private activatedRoute:ActivatedRoute) { this.projetId=activatedRoute.snapshot.params.id;}

  ngOnInit(): void {
    this.projetService.getProjet(this.projetId).subscribe(
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
  onGetPhase(p:any) {
    this.projetService.getphase(p).subscribe(data=>{
      this.phases=data;
      console.log(data);
    },error=>{
      console.log(error);
    })


  }

}
