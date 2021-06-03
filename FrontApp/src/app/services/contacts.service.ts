import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Contact} from '../model/contact.model';
import {Consultant} from '../model/consultant.model';
import {Observable} from 'rxjs';


@Injectable({providedIn: "root"})
export class ContactsServices {
  constructor(private http: HttpClient) {
  }

  getAllContacts() {
    let host = environment.host1;
    return this.http.get<any[]>(host + "/contacts");
  }

  getContacts(c: any) {
    return this.http.get(c._links.contacts.href.replace("{?projection}", ""));


  }
  getContact(id:number):Observable<Contact>{
    let host=environment.host1;
    return this.http.get<Contact>(host+"/contacts/"+id);
  }

  deleteContact(contact: Contact) {
    let host = environment.host1;
    //product.selected=!product.selected;
    return this.http.delete<void>(host + "/contacts/" + contact.id);
  }

  save(contact: Contact): Observable<Contact> {
    let host = environment.host1;
    return this.http.post<Contact>(host + "/contacts", contact);
  }
  searchContacts(keyword: string) {
    let host = environment.host1;
    return this.http.get<any[]>(host + "/contacts/search/bynom?n=" + keyword);
  }
}
