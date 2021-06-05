import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.scss']
})
export class UpdateProfilComponent implements OnInit {
  username?:String ;
  newPassword: any;
  oldPassword:any;
  mode:number=0;
  constructor(private userService:AuthService,private router:Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.username=localStorage.getItem("userauth");
    console.log(this.username);
    this.mode=0;
  }

  updatePassword(){
    console.log(this.oldPassword);
    console.log(this.newPassword);
    console.log(this.username);
    // @ts-ignore
    this.userService.updatePassword(this.username,this.oldPassword,this.newPassword).subscribe(
      data => {
        console.log("ok");
        this.userService.logout();

      }
      ,(error)=>{
        this.mode=1;
        console.log(error);
      } );

  }

  retour() {
    this.router.navigate(["/consultant"]);
  }
}
