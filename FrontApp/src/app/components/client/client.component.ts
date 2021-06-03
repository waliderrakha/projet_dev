import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../../services/clients.service';
import {Contact} from '../../model/contact.model';
import {Client} from '../../model/client.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public ls: any;
  contacts: any;
  p:number=1;
  constructor(private clientService: ClientsService,private autheservice:AuthService,
              private router:Router) {
  }

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
      data => {
        this.contacts = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )

  }

  onGetAllClients() {
    this.ls = this.clientService.getAllClients().subscribe(
      data => {
        this.ls = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

  onGetSelectedClients() {

  }

  onSearch(dataForm: any) {
    this.ls = this.clientService.searchClients(dataForm.keyword).subscribe(
      data => {
        this.ls = data;

        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

  onSelect(client: Client) {

  }

  onDelete(client: Client) {
    let v = confirm("Etes vous sûre?");
    if (v == true)
      this.clientService.deleteClient(client)
        .subscribe(data => {
          this.onGetAllClients();
        })

  }

  onGetContact(c: any) {

  }

  onDetail(client: Client) {
    this.router.navigateByUrl("/detailclient/"+client.id)

  }


    onContact(client:Client) {
      this.router.navigateByUrl("/clientcontact/"+client.id)

    }

  onEdit(client:Client) {
    this.router.navigateByUrl("/editclient/"+client.id)

  }
}
