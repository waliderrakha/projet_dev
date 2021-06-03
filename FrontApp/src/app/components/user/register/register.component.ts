import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed =false;
  errorMessage = '';
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
    this.isSignUpFailed =false;
    this.authService.loadToken();
  }

  onSubmit() {
    //console.log(this.form);
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
       this.errorMessage = err.error.message;
       console.log(this.errorMessage);
        this.isSignUpFailed =true;
        console.log(err);
      }
    );
  }

  retour() {
    this.router.navigate(["/consultant"]);
  }
}
