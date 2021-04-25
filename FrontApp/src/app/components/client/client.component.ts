import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service';
import {Contact} from '../../model/contact.model';
import {Client} from '../../model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public ls:any;
  contacts:any;
  constructor(private clientService:ClientsService) { }

  ngOnInit(): void {
    /*this.ls =this.clientService.getAllClients().subscribe(
      data=>{
        this.ls=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  */
  }


  onGetContacts(c: any) {
    this.clientService.getContacts(c).subscribe(
      data=>{
        this.contacts=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )

  }

  onGetAllClients() {
    this.ls =this.clientService.getAllClients().subscribe(
      data=>{
        this.ls=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  onGetSelectedClients() {

  }

  onSearch(value: any) {

  }

  onSelect(client: Client) {

  }

  onDelete(client: Client) {
    let v=confirm("Etes vous sûre?");
    if(v==true)
      this.clientService.deleteClient(client)
        .subscribe(data=>{
          this.onGetAllClients();
        })

  }
}
