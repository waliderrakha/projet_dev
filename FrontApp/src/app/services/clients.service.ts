import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Contact} from '../model/contact.model';
import {Client} from '../model/client.model';
import {Observable} from 'rxjs';

@Injectable({providedIn:"root"})
export class ClientsService{
  constructor(private http:HttpClient) {
  }
  getAllClients(){
    let host=environment.host1;
    return this.http.get<any[]>(host+"/clients");
  }
  findAllClients(){
    let host=environment.host1;
    return this.http.get<any[]>(host+"/clients/findAll");
  }
  findByIdClients(id:number){
    let host=environment.host1;
    return this.http.get<any[]>(host+"/clients/find/"+id);
  }
  getContacts(c:any){
    return this.http.get(c._links.contacts.href.replace("{?projection}",""));


  }
  deleteClient(client:Client){
    let host=environment.host1;
    //product.selected=!product.selected;
    return this.http.delete<void>(host+"/clients/"+client.id);
  }

}
