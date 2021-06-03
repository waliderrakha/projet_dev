import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ActionEvent, ConsultantActionsTypes} from '../../../state/consultant.state';
import {Consultant} from '../../../model/consultant.model';

@Component({
  selector: 'app-consultant-item',
  templateUrl: './consultant-item.component.html',
  styleUrls: ['./consultant-item.component.scss']
})
export class ConsultantItemComponent implements OnInit {
  @Input() consutant?: Consultant;
  @Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(consutant: Consultant) {
    this.eventEmitter.emit({type: ConsultantActionsTypes.DELETE_CONSULTANT, payload: consutant});

  }

  onEdit(consutant: Consultant) {
    this.eventEmitter.emit({type: ConsultantActionsTypes.EDIT_CONSULTANT, payload: consutant});

  }

  onDetail(consutant: Consultant) {
    this.eventEmitter.emit({type: ConsultantActionsTypes.DETAIL_CONSULTANT, payload: consutant});

  }
}
