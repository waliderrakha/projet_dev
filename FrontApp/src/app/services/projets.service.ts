import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Contact} from '../model/contact.model';
import {Observable} from 'rxjs';
import {Projet} from '../model/projet.model';


@Injectable({providedIn:"root"})
export class ProjetsServices{
  constructor(private http:HttpClient) {
  }
  getAllProjts(){
    let host=environment.host2;
    return this.http.get<any[]>(host+"/projets");
  }
  getAllProjet(){
    let host=environment.host2;
    return this.http.get<any[]>(host+"/projets/projets");
  }


  save(projet:Projet):Observable<Projet>{
    let host=environment.host2;
    return this.http.post<Projet>(host+"/projets/createProjet",projet);
  }

}
