import { Component, OnInit } from '@angular/core';
import {FichesTempsService} from "../../services/fichesTemps.service";
import {Router} from "@angular/router";
import {ficheTemps} from "../../model/ficheTemps.model";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-fiche-temps',
  templateUrl: './fiche-temps.component.html',
  styleUrls: ['./fiche-temps.component.scss']
})
export class FicheTempsComponent implements OnInit {
  fiche:any;
  constructor(private fichesTempsService:FichesTempsService, private router:Router,
              public fb: FormBuilder,) { }

  ngOnInit(): void {
  }


  onGetAllFicheTemps() {
    this.fiche =this.fichesTempsService.getAllFicheTemps().subscribe(
      data=>{
        this.fiche=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  onDetail(c: any) {

  }

  onSelect(c: ficheTemps) {
    this.fichesTempsService.formData = this.fb.group(Object.assign({},c));
    //this.fichesTempsService.choixmenu ="M";
    this.router.navigate(['/updatefichestemps']);
    console.log(c.id);
    this.fichesTempsService.idfiche=c.id;

  }
}
