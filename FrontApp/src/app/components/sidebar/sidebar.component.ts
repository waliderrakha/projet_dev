import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // @ts-ignore
  private roles: string;
  isLoggedIn = false;
  public showAdminBoard = false;
  public showUserBoard = false;
  constructor(public userService:AuthService) {
  }

  ngOnInit(): void {
    this.userService.loadToken();
     // @ts-ignore
    this.roles=localStorage.getItem("role");
    console.log(this.roles);
    if(this.roles=="ADMIN"){
      this.showAdminBoard=true;
    }
    if(this.roles=="USER")
    {
      this.showUserBoard=true;
    }


  }


}
