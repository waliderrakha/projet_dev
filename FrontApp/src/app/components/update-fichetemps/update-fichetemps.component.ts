import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {AddLigneficheComponent} from '../lignefiche-temps/add-lignefiche/add-lignefiche.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FichesTempsService} from '../../services/fichesTemps.service';
import {LignesficheTempsService} from '../../services/lignesficheTemps.service';
import { ToastrService } from 'ngx-toastr';
import {ProjetPhaseComponent} from '../projet-phase/projet-phase.component';
import {ligneFiche} from '../../model/ligneFiche.model';

@Component({
  selector: 'app-update-fichetemps',
  templateUrl: './update-fichetemps.component.html',
  styleUrls: ['./update-fichetemps.component.scss']
})
export class UpdateFichetempsComponent implements OnInit {
  ClientList: any;
  isValid:boolean = true;
  username?:string | null;
  submitted: boolean = false;

  constructor(public ficheservice:FichesTempsService,
              public lficheservice:LignesficheTempsService,
              private dialog:MatDialog,public fb: FormBuilder,
              private toastr :ToastrService,
              private router :Router,
              private currentRoute: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<AddLigneficheComponent>,) { }
  get f() { // @ts-ignore
    return this.ficheservice.formData.controls; }

  ngOnInit(): void {
      this.InfoForm();
      // @ts-ignore
      this.ficheservice.getfiche(this.ficheservice.idfiche).subscribe(
        response =>{ // @ts-ignore
          this.f['username'].setValue(response.username);
          // @ts-ignore
          this.f['annee'].setValue(response.annee);
          // @ts-ignore
          this.f['mois'].setValue(response.mois);
          // @ts-ignore
          this.f['tothr'].setValue(response.tothr);

          console.log("hhahahahhahahahha");
          console.log(response);
        }
      );
      // @ts-ignore
      this.lficheservice.getAll(this.ficheservice.idfiche).subscribe(
        response =>{ // @ts-ignore
          this.ficheservice.list = response._embedded.ligneFiches;
          console.log("n3assssssssssssss");
          console.log(this.ficheservice.list);
        }
      );




  }

  InfoForm() {
    this.ficheservice.formData = this.fb.group({
      id :null,
      username:'',
      annee : [2021,Validators.required],
      mois : [1,Validators.required],
      idSemaine : 0,
      tothr : 0,
      lfiche :[],
    });
  }

  onSubmit() {
    this.submitted = true;
    //console.log(this.ficheservice.formData?.value);
    if (this.ficheservice.formData?.invalid) return;
    // @ts-ignore
    this.f['username'].setValue(localStorage.getItem('userauth'));
    // @ts-ignore
    this.f['lfiche'].setValue(this.ficheservice.list);
    console.log("mmmamamammamamamammaamama");
    console.log(this.ficheservice.choixmenu);
    console.log(this.ficheservice.idfiche);
    // @ts-ignore
    this.ficheservice.updateFiche(this.ficheservice.formData?.value,this.ficheservice.idfiche)
      .subscribe( data => {
        alert("Success Saving Client");
      });
    this.router.navigate(["/client"]);


    console.log(this.ficheservice.formData?.value);


  }

  OnSelectClient(target: EventTarget) {

  }

  // @ts-ignore
  AddData(lcommandeIndex,Id){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="40%";
    dialogConfig.height="80%";
    dialogConfig.data={lcommandeIndex,Id};
    this.dialog.open(AddLigneficheComponent,dialogConfig).afterClosed().subscribe(b10=>{
      //this.calcul();
      this.calcul();
    });
  }

  onDelete(item : ligneFiche,i:number){
    this.ficheservice.list.splice(i,1);
    this.calcul();
  }
  calcul(){
    this.f['tothr'].setValue(this.ficheservice.list.reduce((prev, curr) => {
      // @ts-ignore
      return prev + curr.tthr;
    }, 0));
    console.log(this.ficheservice.formData?.value);

  }

}
