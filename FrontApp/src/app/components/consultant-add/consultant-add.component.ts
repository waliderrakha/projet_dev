import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConsultantsService} from '../../services/consultants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consultant-add',
  templateUrl: './consultant-add.component.html',
  styleUrls: ['./consultant-add.component.scss']
})
export class ConsultantAddComponent implements OnInit {
  consultantFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private consultantsService: ConsultantsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.consultantFormGroup = this.fb.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      type: ["", Validators.required],
      desc: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      telMobile: ["", Validators.required],
      telFixe: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      fonction: ["", Validators.required],
      formation: ["", Validators.required],
      nbreJour: [0, Validators.required],
    });


  }

  onSaveConsultant() {
    this.submitted = true;
    if (this.consultantFormGroup?.invalid) return;
    //affecter une valeur a un attribut
    //this.consultantFormGroup?.value.email="dddd";
    this.consultantsService.save(this.consultantFormGroup?.value)
      .subscribe(data => {
        alert("Success Saving Consulant");
      });
    this.router.navigate(["/consultant"]);

  }
}
