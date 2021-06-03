import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm?:FormGroup;
  mode:number=0;
  user: any={};

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(public fb: FormBuilder,private router:Router,private userService : AuthService,) {


  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });

  }

  onSubmit() {
    // @ts-ignore
    /*const val = this.loginForm.value;
    console.log(val);
    console.log(val.username);*/

    this.userService.login1(this.form).subscribe(
      response =>{this.user = response;
        this.user = response;
        console.log(response);
        //localStorage.setItem("name", this.user.username);
  let  jwth=response.headers.get("authorization");
  console.log(jwth);
  // @ts-ignore
        this.userService.saveToken(jwth);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        /*let jwt = "Bearer " + this.user["access-token"];
        console.log(jwt);
        localStorage.setItem("token", jwt);*/
        this.router.navigate(['consultant']);


      },error => {
        this.mode=1;
        /*this.errorMessage = error.error.message;*/
        this.isLoginFailed = true;
      }
      )




  }
}
