import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ficheTemps} from '../model/ficheTemps.model';
import {Observable} from 'rxjs';
import {ligneFiche} from '../model/ligneFiche.model';
import {FormGroup} from '@angular/forms';


@Injectable({providedIn:"root"})
export class FichesTempsService {
  public list: ligneFiche[]=new Array();
  public formData: FormGroup | undefined;
  choixmenu : string  = "A";
  idfiche: number | undefined;
  constructor(private http:HttpClient) {
  }
  getAllFicheTemps(){
    let host=environment.host3;
    return this.http.get<any[]>(host+"/ficheTemps");
  }

  findByIdficheTemps(id:number){
    let host=environment.host3;
    return this.http.get<any[]>(host+"/ficheTemps/find/"+id);
  }


  save(info: Object) {
    let host=environment.host3;
    return this.http.post(host+"/fiches1",info);
  }

  getfiche(id:number) {
    let host=environment.host3;
    return this.http.get(host+"/ficheTemps/"+id);
  }

  updateFiche(fiche: Object, id: number) {
    let host=environment.host3;
    return this.http.post(host+"/updateFiche?id="+id,fiche);

  }
}
