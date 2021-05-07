import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ConsultantsService} from '../../../services/consultants.service';
import {ClientsService} from '../../../services/clients.service';
import {ContactsServices} from '../../../services/contacts.service';
import {environment} from '../../../../environments/environment';
import {Client} from '../../../model/client.model';
import {Contact} from '../../../model/contact.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  clientFormGroup?:FormGroup;
  submitted:boolean=false;
  // @ts-ignore
  currentProduct;
  clientId?:number;
  clients:any;
  clients1:any;
  contact?:Contact;
 // client?:Client;
  host1=environment.host1;
  selectedClient: any;
  ListClient: any;
  data:any;
  contacttest?:Contact;
  contacttest1?:Contact;
  public prenom?:string;
  public nom?:string;
  public tel_mobile?:string;
  public tel_fixe?:string;
  public email?:string;
  public client?:string;

  constructor(private fb:FormBuilder, private clientsService:ClientsService,
              private contactService:ContactsServices,
              private http:HttpClient) {
    this.contact=new Contact();
    //this.contact.client=new Client();
    this.contacttest=new Contact();
   // this.contacttest.client=new Client();
    this.contacttest1=new Contact();
   // this.contacttest1.client=new Client();



  }

  ngOnInit(): void {
    this.ongetAllClients1();
  }

  ongetAllClients(){
    this.clientsService.getAllClients().subscribe(
    data=>{
      this.clients=data;
      // @ts-ignore
      //this.clientFormGroup?.get(this.client)?.setValue(this.client);
      //console.log(data);
    },error => {
      console.log(error);

  }
    )
  }
  ongetAllClients1(){
    this.clientsService.findAllClients().subscribe(
      data=>{
        this.ListClient=data;
        console.log("current client");
        this.currentProduct=data;
        //console.log(this.currentProduct._link.self.href);
        console.log(data);
      },error => {
        console.log(error);

      }
    )
  }


  // @ts-ignore
  do2(evt) {

    if (evt.target.value != null) {
      this.clientsService.findByIdClients(evt.target.value).subscribe( data => {
        this.data = data;
        console.log("evvvvvvvvv");
        console.log(evt.target.value);
        //console.log(evt);
        //console.log(data);
        //console.log(evt.target.value);
        // @ts-ignore
        //console.log(this.data.organisation);
        //console.log(this.data.id);
        // @ts-ignore
        /*this.contact.client.organisation= this.data.organisation ;
        // @ts-ignore
        this.contact?.client?.id=this.data.id;
        // @ts-ignore
        this.contact?.client?.codePostal=this.data.codePostal;
        // @ts-ignore
        this.contact?.client?.adressSiege=this.data.adressSiege;
        // @ts-ignore
        this.contact?.client?.adressLiv=this.data.adressLiv;
        // @ts-ignore
        this.contact?.client?.telMobile=this.data.telMobile;
        // @ts-ignore
        this.contact?.client?.ville=this.data.ville;
        // @ts-ignore
        this.contact?.client?.pays=this.data.pays;
        // @ts-ignore
        this.contact?.client?.telFaxe=this.data.telFaxe;
        // @ts-ignore
        this.contact?.client?.telFixe=this.data.telFixe;
        // @ts-ignore
        this.contact?.client?.telMobile=this.data.telMobile;
        // @ts-ignore
        this.contact?.client?.email=this.data.email;
        // @ts-ignore
        this.contact?.client?.raisonSoc=this.data.raisonSoc;
        // @ts-ignore
        this.contact?.client?.statut=this.data.statut;
        // @ts-ignore
        this.contact?.client?.urlSoc=this.data.urlSoc;
        // @ts-ignore
        this.contact?.client?.fonction=this.data.fonction;
        // @ts-ignore
        this.contact?.client?.numContrat=this.data.numContrat;
        // @ts-ignore
        this.contact?.client?.type=this.data.type;
        // @ts-ignore
        this.contact?.client?.chefProjet=this.data.chefProjet;*/
        // @ts-ignore
        //this.contact?.setClient(data);
        // @ts-ignore
        this.contacttest?.setClient(data);


        //console.log(this.contact);
  // console.log(this.selectedClient);
      });
    }

  }

  addContact() {

    // @ts-ignore
    this.clientsService.createContactClient(this.contact,this.clientId).subscribe(
      data => {
        console.log("--------------------")
        console.log(data);
        alert("contact ajoutée avec succées");}
    );
    console.log("((((")
    /*this.http.post(this.host1 + '/contacts', this.contact).subscribe(
      data => {
        console.log("--------------------")
        console.log(data);
        alert("contact ajoutée avec succées");
      }

    );*/

  }

  // @ts-ignore
  do(evt) {
    //console.log(evt.target.value);
    // @ts-ignore
    this.contact?.nom=evt.target.value;
  }

  // @ts-ignore
  do1(evt) {
    //console.log(evt.target.value);
    // @ts-ignore
    this.contact?.prenom=evt.target.value;

  }

  // @ts-ignore
  do3(evt) {
    // @ts-ignore
    this.contact?.tel_mobile=evt.target.value;

  }
// @ts-ignore
  do4(evt) {
    // @ts-ignore
    this.contact?.tel_fixe=evt.target.value;
  }

  saveOrUpdateContact(addContactForm: NgForm) {
    /*// @ts-ignore
    console.log("debut methode save or update contact")
    console.log("aaaaaaaaaaaaaaa");
    console.log(addContactForm.value);
    // @ts-ignore
    this.contacttest?.nom=addContactForm.value.nom;
    // @ts-ignore
    this.contacttest?.prenom=addContactForm.value.prenom;
    // @ts-ignore
    this.contacttest?.tel_mobile=addContactForm.value.telMobile;
    // @ts-ignore
    this.contacttest?.tel_fixe=addContactForm.value.telFixe;
    // @ts-ignore
    this.contacttest?.email=addContactForm.value.email;
    // @ts-ignore
    this.contacttest?.dep=addContactForm.value.dep;





    console.log("contact test")
    console.log(this.contacttest);

    console.log("fin methode save or update contact")
     console.log("contact a ajouter");
     console.log(this.contacttest1);*/

    //this.http.post(this.host1 + '/clients/add',addContactForm);
    this.addContact();
  }

  // @ts-ignore
  don(evt) {

    console.log(this.host1+"/"+evt.target.value);
    // @ts-ignore
    this.contact?.client=this.host1+"/"+evt.target.value;

  }
}
