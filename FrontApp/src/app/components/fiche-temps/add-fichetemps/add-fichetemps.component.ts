import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {AddLigneficheComponent} from '../../lignefiche-temps/add-lignefiche/add-lignefiche.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {FormBuilder} from '@angular/forms';
import {FichesTempsService} from '../../../services/fichesTemps.service';
import {LignesficheTempsService} from '../../../services/lignesficheTemps.service';
import { ToastrService } from 'ngx-toastr';
import {ProjetPhaseComponent} from '../../projet-phase/projet-phase.component';

@Component({
  selector: 'app-add-fichetemps',
  templateUrl: './add-fichetemps.component.html',
  styleUrls: ['./add-fichetemps.component.scss']
})
export class AddFichetempsComponent implements OnInit {
  ClientList: any;

  constructor(public ficheservice:FichesTempsService,
              public lficheservice:LignesficheTempsService,
              private dialog:MatDialog,public fb: FormBuilder,
              private toastr :ToastrService,
              private router :Router,
              private currentRoute: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<AddLigneficheComponent>,) { }

  ngOnInit(): void {
  }

  onSubmit() {

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
    this.dialog.open(AddLigneficheComponent,dialogConfig);
  }


  onDelete() {

  }

}
