import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConsultantsService} from '../../services/consultants.service';

@Component({
  selector: 'app-consultant-add',
  templateUrl: './consultant-add.component.html',
  styleUrls: ['./consultant-add.component.scss']
})
export class ConsultantAddComponent implements OnInit {
  consultantFormGroup?:FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder, private consultantsService:ConsultantsService) { }

  ngOnInit(): void {
    this.consultantFormGroup=this.fb.group({
      nom:["",Validators.required],
      prenom:["",Validators.required],
      type:["",Validators.required],
      desc:["",Validators.required],
      telMobile:["",Validators.required],
      telFixe:["",Validators.required],
      email:["",Validators.required],
      fonction:["",Validators.required],
      formation:["",Validators.required],
      nbreJour:[0,Validators.required],
    });


  }

  onSaveConsultant() {
    this.submitted=true;
    if(this.consultantFormGroup?.invalid) return;
    //affecter une valeur a un attribut
    //this.consultantFormGroup?.value.email="dddd";
    this.consultantsService.save(this.consultantFormGroup?.value)
      .subscribe(data=>{
        alert("Success Saving Consulant");
      });

  }
}
