import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ligneFiche} from '../model/ligneFiche.model';
import {Observable} from 'rxjs';


@Injectable({providedIn:"root"})
export class LignesficheTempsService {
  constructor(private http:HttpClient) {
  }
  getAllLigneFicheTemps(){
    let host=environment.host3;
    return this.http.get<any[]>(host+"/ligneFiches");
  }

  findByIdligneficheTemps(id:number){
    let host=environment.host3;
    return this.http.get<any[]>(host+"/ligneFiches/find/"+id);
  }


}
