import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../../model/contact.model";

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss']
})
export class ClientContactComponent implements OnInit {
  contacts:any;
  clientId:number;
  client:any;
  constructor(private clientService:ClientsService,private activatedRoute:ActivatedRoute) {
    this.clientId=activatedRoute.snapshot.params.id;}

  ngOnInit(): void{
    this.clientService.getClient(this.clientId).subscribe(
      data=>
      {this.client=data;
        console.log(this.client);
        console.log("(((((((")
        console.log(data);
      }, error => {
        console.log(error)
      }
    )

  }
  onGetContact(c:any) {
    this.clientService.getcont(c).subscribe(data=>{
      this.contacts=data;
      console.log(data);
    },error=>{
      console.log(error);
    })


  }


}
