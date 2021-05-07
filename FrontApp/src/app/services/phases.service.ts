import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Contact} from '../model/contact.model';
import {Observable} from 'rxjs';
import {Projet} from '../model/projet.model';
import {Phase} from '../model/phase.model';
import {host} from '@angular-devkit/build-angular/src/test-utils';


@Injectable({providedIn:"root"})
export class PhasesServices{
  constructor(private http:HttpClient) {
  }
  getAllPhases(){
    let host=environment.host2;
    return this.http.get<any[]>(host+"/phases");
  }

  public createPhaseProjet(phase:Phase, id:number){
    let host=environment.host2;
    return this.http.post<Phase>(host+"/createPhaseId?id="+id,phase);

  }

}
