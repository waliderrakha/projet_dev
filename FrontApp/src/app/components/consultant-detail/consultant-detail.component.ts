import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConsultantsService} from '../../services/consultants.service';
import {Consultant} from '../../model/consultant.model';

@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styleUrls: ['./consultant-detail.component.scss']
})
export class ConsultantDetailComponent implements OnInit {
  consultantId:number;
  consultant?:Consultant;
  constructor(private activatedRoute:ActivatedRoute,
              private consultantsService:ConsultantsService) {
    this.consultantId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.consultantsService.getConsultant(this.consultantId).subscribe(
      data=>
      {this.consultant=data;
        console.log(this.consultant);
        console.log("(((((((")
        console.log(data);
      }, error => {
        console.log(error)
      }
    )
  }

}
