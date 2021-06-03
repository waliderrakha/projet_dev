import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientsService} from '../../services/clients.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  clientId: number;
  clientFormGroup?: FormGroup;
  submitted: boolean = false;


  constructor(private fb: FormBuilder, private clientsService: ClientsService,
              private router: Router,private activatedRoute: ActivatedRoute) {
    this.clientId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.clientsService.getClient(this.clientId)
      .subscribe(client => {
        this.clientFormGroup = this.fb.group({
          id: [client.id, Validators.required],
          organisation: [client.organisation, Validators.required],
          codePostal: [client.codePostal, Validators.required],
          adressSiege: [client.adressSiege,Validators.maxLength(100)],
          adressLiv: [client.adressLiv, Validators.compose([Validators.required, Validators.maxLength(100)])],
          telMobile: [client.telMobile],
          ville: [client.ville, Validators.required],
          email: [client.email, Validators.compose([Validators.required, Validators.email])],
          telFixe: [client.telFixe, Validators.required],
          telFaxe: [client.telFaxe],
          pays: [client.pays, Validators.required],
          raisonSoc: [client.raisonSoc, Validators.required],
          urlSoc: [client.urlSoc],
          fonction: [client.fonction, Validators.required],
          type: [client.type, Validators.required],
          numContrat: [client.numContrat, Validators.required],
          chefProjet: [client.chefProjet, Validators.required],
        })
      });

  }
  onEditClinet() {
    this.clientsService.updateClient(this.clientFormGroup?.value)
      .subscribe(data => {
        alert("Success Client updated");
      });
    this.router.navigate(["/client"]);
  }

}
