import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Inject} from '@angular/core'
import {AddFichetempsComponent} from '../../fiche-temps/add-fichetemps/add-fichetemps.component';
import {ProjetPhaseComponent} from '../../projet-phase/projet-phase.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FichesTempsService} from '../../../services/fichesTemps.service';
import {ProjetsServices} from '../../../services/projets.service';

@Component({
  selector: 'app-add-lignefiche',
  templateUrl: './add-lignefiche.component.html',
  styleUrls: ['./add-lignefiche.component.scss']
})
export class AddLigneficheComponent implements OnInit {

  formData: FormGroup | undefined;
  projetList:any;
  isValid:boolean=true;
  wtthr = 0;
  phaseList: any;

  constructor(private dialog:MatDialog,
              public dialogRef: MatDialogRef<AddLigneficheComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder,
              private ficheTemps:FichesTempsService,
              private projetService:ProjetsServices) { }
              get f() { // @ts-ignore
                return this.formData.controls; }

  ngOnInit(): void {
    this.getAllProjets();
    //this.InfoForm();
    if(this.data.lcommandeIndex==null)
    {
      this.InfoForm();
    }
    else
    {
      this.formData =this.fb.group(Object.assign({},this.ficheTemps.list[this.data.lcommandeIndex]));
    }
  }
  InfoForm() {
    this.formData = this.fb.group({
      id: null,
      idProjet :0,
      idPhase : 0,
      nbrl : 0,
      nbrmar: 0,
      nbrmer: 0,
      nbrj :0,
      nbrv :0,
      nbrs :0,
      desc :'',
      tthr:0,
      nbrh:0,
      choix:'',

    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.affecter();
    this.cal();
    if(this.data.lcommandeIndex==null){
      console.log(this.formData?.value);
      // @ts-ignore
      this.ficheTemps.list.push(this.formData.value);
      this.dialogRef.close();

    }
    else
    {

      // @ts-ignore
      this.ficheTemps.list[this.data.lcommandeIndex] = this.formData.value;
    }
    this.dialogRef.close();




  }

  getAllProjets() {
    this.projetService.getAllProjet().subscribe(
      data => {
        this.projetList = data;
        console.log(this.projetList);

      },
      error => {
        console.log(error);
      }
    )


  }

  cal(){
    this.wtthr=parseFloat(this.formData?.value.nbrl)+parseFloat(this.formData?.value.nbrmar)+
      parseFloat(this.formData?.value.nbrmer)+parseFloat(this.formData?.value.nbrj)+
      parseFloat(this.formData?.value.nbrv)+parseFloat(this.formData?.value.nbrs);
    console.log("nbre tt heure");
    console.log(this.wtthr);
    this.f['tthr'].setValue(this.wtthr);

  }


  affecter() {

    let jr=this.formData?.value.choix;
    console.log("wallllllllllllllllllllllid");
    console.log(jr);
    console.log(this.formData?.value.nbrh);
    console.log("MOUUUUUUUUUUUUUUUUUUUD");
    if (jr=="lundi")
     { // @ts-ignore
       this.f['nbrl'].setValue(this.formData?.value.nbrh);
     }
    if (jr=="mardi")
    { // @ts-ignore
      this.f['nbrmar'].setValue(this.formData?.value.nbrh);
    }
    if (jr=="mercredi")
    { // @ts-ignore
      this.f['nbrmer'].setValue(this.formData?.value.nbrh);
    }
    if (jr=="jeudi")
    { // @ts-ignore
      this.f['nbrj'].setValue(this.formData?.value.nbrh);
    }
    if (jr=="vendredi")
    { // @ts-ignore
      this.f['nbrv'].setValue(this.formData?.value.nbrh);
    }
    if (jr=="samedi")
    { // @ts-ignore
      this.f['nbrs'].setValue(this.formData?.value.nbrh);
    }
  }
}
