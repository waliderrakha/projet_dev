import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Inject} from '@angular/core'
import {AddFichetempsComponent} from '../../fiche-temps/add-fichetemps/add-fichetemps.component';
import {ProjetPhaseComponent} from '../../projet-phase/projet-phase.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FichesTempsService} from '../../../services/fichesTemps.service';

@Component({
  selector: 'app-add-lignefiche',
  templateUrl: './add-lignefiche.component.html',
  styleUrls: ['./add-lignefiche.component.scss']
})
export class AddLigneficheComponent implements OnInit {

  formData: FormGroup | undefined;
  projetList:any;
  isValid:boolean=true;
  wtotht = 0;
  wtottva = 0;
  wtotttc = 0;
  phaseList: any;

  constructor(private dialog:MatDialog,
              public dialogRef: MatDialogRef<AddLigneficheComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder,
              private ficheTemps:FichesTempsService) { }

  ngOnInit(): void {
    this.InfoForm();
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
      nbrs :'',
      desc :'',

    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {

    if(this.data.lcommandeIndex==null)
    {
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

}
