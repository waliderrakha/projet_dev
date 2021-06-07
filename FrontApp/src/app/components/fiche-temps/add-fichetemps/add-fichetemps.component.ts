import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {AddLigneficheComponent} from '../../lignefiche-temps/add-lignefiche/add-lignefiche.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FichesTempsService} from '../../../services/fichesTemps.service';
import {LignesficheTempsService} from '../../../services/lignesficheTemps.service';
import { ToastrService } from 'ngx-toastr';
import {ProjetPhaseComponent} from '../../projet-phase/projet-phase.component';
import {ligneFiche} from '../../../model/ligneFiche.model';

@Component({
  selector: 'app-add-fichetemps',
  templateUrl: './add-fichetemps.component.html',
  styleUrls: ['./add-fichetemps.component.scss']
})
export class AddFichetempsComponent implements OnInit {
  ClientList: any;
  isValid:boolean = true;

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
    this.ficheservice.list = [];
  }

  InfoForm() {
    this.ficheservice.formData = this.fb.group({
      id :null,
      username:'',
      annee : 0,
      mois : 0,
      idSemaine : 0,
      tothr : 0,
      lfiche :[],
    });
  }

  onSubmit() {
    this.f['lfiche'].setValue(this.ficheservice.list);
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
