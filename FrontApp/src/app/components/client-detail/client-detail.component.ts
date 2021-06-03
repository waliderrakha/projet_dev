import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientsService} from "../../services/clients.service";
import {Client} from "../../model/client.model";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  clientId:number;
  client?:Client;
  isReadMore = true

  constructor(private activatedRoute:ActivatedRoute,
              private clientsService:ClientsService) {
    this.clientId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.clientsService.getClient(this.clientId).subscribe(
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
  showText() {
    this.isReadMore = !this.isReadMore
  }

}
