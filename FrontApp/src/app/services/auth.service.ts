import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {any} from 'codelyzer/util/function';
import { JwtHelperService } from "@auth0/angular-jwt";
import {Router} from '@angular/router';
const AUTH_API = 'http://localhost:8080';
import {user} from '../model/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
islogin=false;
 private jwtToken="";
  private userauth="";
 private role: string | undefined;
 private roles?:Array<any>;
  constructor(private http:HttpClient,private router:Router) { }


  // @ts-ignore
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API+"/login", {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
    this.islogin=true;
  }
  // @ts-ignore
  login1(user){
    return this.http.post(AUTH_API+"/login",user,{observe:'response'});
  }
  saveToken(jwt:string){
    this.jwtToken=jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper=new JwtHelperService();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    this.userauth=jwtHelper.decodeToken(this.jwtToken).sub;

      // @ts-ignore
      localStorage.setItem('role',this.roles);

      localStorage.setItem('userauth',this.userauth);
    console.log(this.roles);
    console.log("decode--------------");
    console.log(jwtHelper.decodeToken(this.jwtToken));

  }
  loadToken(){
    // @ts-ignore
    this.jwtToken=localStorage.getItem("token");
  }
  loadRole(){
    // @ts-ignore
    this.role=localStorage.getItem("role");
  }



  GetUsers(){
    this.loadToken();
    //if(this.jwtToken==null) this.loadToken();
    console.log(this.jwtToken);
    return this.http.get(AUTH_API+"/users",
      {headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userauth');
    this.router.navigate(["/login"]);

  }
  isAdmin1(){
// @ts-ignore
    this.role=this.loadRole();
      // @ts-ignore
    if (this.role=="ADMIN")
      {console.log("ananannaan");
        return true;}
    return false;
  }
  /*isAdmin(){
    // @ts-ignore
    for (let  r of this.roles)
    { //console.log(r);
      if (r=="ADMIN")
      {//console.log("ananannaan");
        return true;}
    }
    return false;
  }*/
  register(user:user){
    this.loadToken();
    return this.http.post(AUTH_API +"/signup", {
      username: user.username,
      email: user.email,
      role: user.role,
      password: user.password
    },{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  //change password
  updatePassword( username: String, oldPass: String, newPass: String ) {
    const addBody = {
      'username': username,
      'oldPass': oldPass,
      'newPass': newPass
    } ;

    return  this.http.post<user>("http://localhost:8080/updatePassword", addBody);
  }
  //toaster



}
