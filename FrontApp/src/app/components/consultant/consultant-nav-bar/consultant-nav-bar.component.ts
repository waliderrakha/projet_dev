import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ConsultantActionsTypes} from '../../../state/consultant.state';

@Component({
  selector: 'app-consultant-nav-bar',
  templateUrl: './consultant-nav-bar.component.html',
  styleUrls: ['./consultant-nav-bar.component.scss']
})
export class ConsultantNavBarComponent implements OnInit {
  @Output() eventEmitter: EventEmitter<ActionEvent>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllConsultants() {
    this.eventEmitter.emit({type:ConsultantActionsTypes.GET_ALL_CONSULTANT});

  }

  onGetInterneConsultants() {
    this.eventEmitter.emit({type:ConsultantActionsTypes.GET_INTERNE_CONSULTANT});

  }

  onGetExterneConsultants() {
    this.eventEmitter.emit({type:ConsultantActionsTypes.GET_EXTERNE_CONSULTANT});
  }

  onNewConsultants() {
  this.eventEmitter.emit({type:ConsultantActionsTypes.NEW_CONSULTANT});
  }

  onSearch(dataForm: any) {
    this.eventEmitter.emit({type:ConsultantActionsTypes.SEARCH_CONSULTANT,payload:dataForm});

  }
}
