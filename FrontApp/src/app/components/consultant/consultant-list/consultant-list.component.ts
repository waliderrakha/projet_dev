import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionEvent, ConsultantActionsTypes} from '../../../state/consultant.state';
import {Consultant} from '../../../model/consultant.model';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.scss']
})
export class ConsultantListComponent implements OnInit {
  @Input() ls:any;
  @Output() eventEmitter: EventEmitter<ActionEvent>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(c: Consultant) {
    this.eventEmitter.emit({type:ConsultantActionsTypes.DELETE_CONSULTANT,payload:c});

  }

  onEdit(c: Consultant) {
    this.eventEmitter.emit({type:ConsultantActionsTypes.EDIT_CONSULTANT,payload:c});

  }
  onDetait(c: Consultant) {
    this.eventEmitter.emit({type:ConsultantActionsTypes.DETAIL_CONSULTANT,payload:c});

  }

  onActionEvent($event: ActionEvent) {
    this.eventEmitter.emit($event);

  }
}
