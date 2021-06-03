import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConsultantsService} from '../../services/consultants.service';
import {Router} from '@angular/router';
import {ClientsService} from '../../services/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  clientFormGroup?: FormGroup;
  submitted: boolean = false;


  constructor(private fb: FormBuilder, private clientsService: ClientsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.clientFormGroup = this.fb.group({
      organisation: ["", Validators.required],
      codePostal: ["", Validators.required],
      adressSiege: ["",Validators.maxLength(100)],
      adressLiv: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      telMobile: [""],
      ville: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      telFixe: ["", Validators.required],
      telFaxe: [""],
      pays: ["", Validators.required],
      raisonSoc: ["", Validators.required],
      urlSoc: [""],
      fonction: ["", Validators.required],
      type: ["", Validators.required],
      numContrat: ["", Validators.required],
      chefProjet: ["", Validators.required],
    });
  }
  onSaveClient() {
    this.submitted = true;
    console.log(this.clientFormGroup?.value);
    if (this.clientFormGroup?.invalid) return;
    //affecter une valeur a un attribut
    //this.consultantFormGroup?.value.email="dddd";
    this.clientsService.save(this.clientFormGroup?.value)
      .subscribe(data => {
        alert("Success Saving Client");
      });
    this.router.navigate(["/client"]);

  }
}
