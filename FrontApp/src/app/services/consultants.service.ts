import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Consultant} from "../model/consultant.model";

@Injectable({providedIn: "root"})
export class ConsultantsService {
  constructor(private http: HttpClient) {
  }

  getAllConsultants(): Observable<any[]> {
    let host = environment.host;
    return this.http.get<any[]>(host + "/consultants");

  }

  retrieveAllConsultants() {
    let host = environment.host;
    return this.http.get<any[]>(host + "/consultants");
  }

  getInterneConsultants() {
    let host = environment.host;
    return this.http.get<any[]>(host + "/consultants/search/bytype?t=interne");

  }

  getExterneConsultants() {
    let host = environment.host;
    return this.http.get<any[]>(host + "/consultants/search/bytype?t=externe");

  }

  searchConsultants(keyword: string) {
    let host = environment.host;
    return this.http.get<any[]>(host + "/consultants/search/bynom?n=" + keyword);
  }

  deleteConsultant(consultant: Consultant) {
    let host = environment.host;
    //product.selected=!product.selected;
    return this.http.delete<void>(host + "/consultants/" + consultant.id);
  }

  save(consultant: Consultant): Observable<Consultant> {
    let host = environment.host;
    return this.http.post<Consultant>(host + "/consultants", consultant);
  }

  getConsultant(id: number): Observable<Consultant> {
    let host = environment.host;
    return this.http.get<Consultant>(host + "/consultants/" + id);
  }

  updateConsultant(consultant: Consultant): Observable<Consultant> {
    let host = environment.host;
    return this.http.put<Consultant>(host + "/consultants/" + consultant.id, consultant);
  }


}
