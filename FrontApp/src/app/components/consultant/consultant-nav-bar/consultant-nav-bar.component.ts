import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ConsultantActionsTypes} from '../../../state/consultant.state';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-consultant-nav-bar',
  templateUrl: './consultant-nav-bar.component.html',
  styleUrls: ['./consultant-nav-bar.component.scss']
})
export class ConsultantNavBarComponent implements OnInit {
  // @ts-ignore
  private roles: string;
  isLoggedIn = false;
  public showAdminBoard = false;
  public showUserBoard = false;
  @Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

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

  onGetAllConsultants() {
    this.eventEmitter.emit({type: ConsultantActionsTypes.GET_ALL_CONSULTANT});

  }

  onGetInterneConsultants() {
    this.eventEmitter.emit({type: ConsultantActionsTypes.GET_INTERNE_CONSULTANT});

  }

  onGetExterneConsultants() {
    this.eventEmitter.emit({type: ConsultantActionsTypes.GET_EXTERNE_CONSULTANT});
  }

  onNewConsultants() {
    this.eventEmitter.emit({type: ConsultantActionsTypes.NEW_CONSULTANT});
  }

  onSearch(dataForm: any) {
    this.eventEmitter.emit({type: ConsultantActionsTypes.SEARCH_CONSULTANT, payload: dataForm});

  }
}
