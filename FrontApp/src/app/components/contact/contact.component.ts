import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client.model';
import {ContactsServices} from '../../services/contacts.service';
import {Contact} from '../../model/contact.model';
import {ClientsService} from '../../services/clients.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ls: any;
  clients:any;

  constructor(private contactService:ContactsServices,
              private clientService:ClientsService,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.getlistClient();
  }

  onGetAllContacts() {
    this.ls =this.contactService.getAllContacts().subscribe(
      data=>{
        this.ls=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  onGetSelectedClients() {
    this.clientService.getAllClients().subscribe(
      data=>{
        this.clients=data;
        console.log(data);
      },error => {
        console.log(error);
      }

    )

  }

  onSearch(value: any) {

  }

  onSelect(client: Client) {

  }
  getlistClient(){


  }
  onDelete(contact: Contact) {
    let v=confirm("Etes vous sûre?");
    if(v==true)
      this.contactService.deleteContact(contact)
        .subscribe(data=>{
          this.onGetAllContacts();
        })

  }

  onGetSelectedContacts() {

  }

  onNewContacts() {
    this.router.navigateByUrl("/addContact")
  }
}
