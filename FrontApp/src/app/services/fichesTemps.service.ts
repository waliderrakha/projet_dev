import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ficheTemps} from '../model/ficheTemps.model';
import {Observable} from 'rxjs';


@Injectable({providedIn:"root"})
export class FichesTempsService {
  list: any;
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


}
