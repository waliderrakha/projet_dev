import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private userservices:AuthService,private router:Router) { }

  ngOnInit(): void {
this.userservices.GetUsers().subscribe(
  data=>{
    console.log(data);
  },error => {
    this.userservices.logout();
    this.router.navigate(['/login']);
    console.log(error);
  }

)
  }

}
