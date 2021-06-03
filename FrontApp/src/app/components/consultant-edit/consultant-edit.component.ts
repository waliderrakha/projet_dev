import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultantsService} from '../../services/consultants.service';

@Component({
  selector: 'app-consultant-edit',
  templateUrl: './consultant-edit.component.html',
  styleUrls: ['./consultant-edit.component.scss']
})
export class ConsultantEditComponent implements OnInit {
  consultantId: number;
  consultantFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private consultantsService: ConsultantsService,
              private fb: FormBuilder,
              private router: Router) {
    this.consultantId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.consultantsService.getConsultant(this.consultantId)
      .subscribe(consultant => {
        this.consultantFormGroup = this.fb.group({
          id: [consultant.id, Validators.required],
          nom: [consultant.nom, Validators.required],
          prenom: [consultant.prenom, Validators.required],
          type: [consultant.type, Validators.required],
          desc: [consultant.desc, Validators.required],
          telMobile: [consultant.telMobile, Validators.required],
          telFixe: [consultant.telFixe, Validators.required],
          email: [consultant.email, Validators.required],
          fonction: [consultant.fonction, Validators.required],
          formation: [consultant.formation, Validators.required],
          nbreJour: [consultant.nbreJour, Validators.required]
        })
      });

  }

  onEditConsultant() {
    this.consultantsService.updateConsultant(this.consultantFormGroup?.value)
      .subscribe(data => {
        alert("Success Consultant updated");
      });
    this.router.navigate(["/consultant"]);
  }
}
