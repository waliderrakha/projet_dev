import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjetsServices} from "../../services/projets.service";
import {ContactsServices} from "../../services/contacts.service";
import {Contact} from "../../model/contact.model";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  isReadMore = true

  showText() {
    this.isReadMore = !this.isReadMore
  }
  contactId:number;
  contact?:Contact;
  constructor(private activatedRoute:ActivatedRoute,
              private contactsServices:ContactsServices) { this.contactId=activatedRoute.snapshot.params.id;}

  ngOnInit(): void {
    this.contactsServices.getContact(this.contactId).subscribe(
      data=>
      {this.contact=data;
        console.log(this.contact);
        console.log("(((((((")
        console.log(data);
      }, error => {
        console.log(error)
      }
    )
  }

}
