import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Contact} from '../model/contact.model';
import {Client} from '../model/client.model';
import {Observable} from 'rxjs';
import {Phase} from '../model/phase.model';
import {Consultant} from '../model/consultant.model';

@Injectable({providedIn: "root"})
export class ClientsService {
  constructor(private http: HttpClient) {
  }

  getAllClients() {
    let host = environment.host1;
    return this.http.get<any[]>(host + "/clients");
  }

  findAllClients() {
    let host = environment.host1;
    return this.http.get<any[]>(host + "/clients/findAll");
  }

  findByIdClients(id: number) {
    let host = environment.host1;
    return this.http.get<any[]>(host + "/clients/find/" + id);
  }

  getContacts(c: any) {
    return this.http.get(c._links.contacts.href.replace("{?projection}", ""));


  }
  getClient(id:number):Observable<Client>{
    let host=environment.host1;
    return this.http.get<Client>(host+"/clients/"+id);
  }

  getcont(c:any){
    return this.http.get(c._links.contacts.href.replace("{?projection}",""));

  }


  deleteClient(client: Client) {
    let host = environment.host1;
    //product.selected=!product.selected;
    return this.http.delete<void>(host + "/clients/" + client.id);
  }

  public createContactClient(contact: Contact, id: number) {
    let host = environment.host1;
    return this.http.post<Contact>(host + "/clients/createClientId?id=" + id, contact);

  }

  save(client: Client): Observable<Consultant> {
    let host = environment.host1;
    return this.http.post<Consultant>(host + "/clients", client);
  }


  updateClient(client: Client): Observable<Client> {
    let host = environment.host1;
    return this.http.put<Client>(host + "/clients/"+client.id, client);
  }
  searchClients(keyword: string) {
    let host = environment.host1;
    return this.http.get<any[]>(host + "/clients/search/byorg?o=" + keyword);
  }
}
