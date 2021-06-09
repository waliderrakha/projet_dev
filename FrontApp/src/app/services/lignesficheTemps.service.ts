import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ligneFiche} from '../model/ligneFiche.model';
import {Observable} from 'rxjs';
import {Phase} from '../model/phase.model';


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


  getAll(idfiche: number):Observable<ligneFiche[]>{
    let host=environment.host3;
    return this.http.get<ligneFiche[]>(host+"/ficheTemps/"+idfiche+"/lfiche");
  }
}
