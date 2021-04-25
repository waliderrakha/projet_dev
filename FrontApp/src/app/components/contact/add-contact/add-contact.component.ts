import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConsultantsService} from '../../../services/consultants.service';
import {ClientsService} from '../../../services/clients.service';
import {ContactsServices} from '../../../services/contacts.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  clientFormGroup?:FormGroup;
  submitted:boolean=false;
  clients:any;
  host1=environment.host1;
  constructor(private fb:FormBuilder, private clientsService:ClientsService,
              private contactService:ContactsServices) { }

  ngOnInit(): void {
    this.clientFormGroup=this.fb.group({
      nom:["",Validators.required],
      prenom:["",Validators.required],
      tel_fixe:["",Validators.required],
      tel_mobile:["",Validators.required],
      email:["",Validators.required],
      telFixe:["",Validators.required],
      dep:["",Validators.required],
      clientID:[0,Validators.required]
    });
    this.ongetAllContacts();
  }

  onSaveContact() {
    this.submitted=true;
    if(this.clientFormGroup?.invalid) return;
    this.contactService.save(this.clientFormGroup?.value)
      .subscribe(data=>{
        alert("Success Saving Contact");
      });

  }
  ongetAllContacts(){
    this.clientsService.getAllClients().subscribe(
    data=>{
      this.clients=data;
      console.log(data);
    },error => {
      console.log(error);

  }
    )
  }
}
