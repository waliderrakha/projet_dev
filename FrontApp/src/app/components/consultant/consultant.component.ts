import {Component, OnInit} from '@angular/core';
import {Consultant} from '../../model/consultant.model';
import {ActionEvent, ConsultantActionsTypes} from '../../state/consultant.state';
import {ConsultantsService} from '../../services/consultants.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit {
  ls:any;

  constructor(private consultantsService:ConsultantsService,
              private httpClient:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(dataForm: any) {
    this.ls =this.consultantsService.searchConsultants(dataForm.keyword).subscribe(
      data=>{
        this.ls=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  onGetAllConsultants() {
    this.ls =this.consultantsService.retrieveAllConsultants().subscribe(
      data=>{
        this.ls=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )

  }

  onDelete(c:Consultant) {
    let v=confirm("Etes vous sûre?");
    if(v==true)
      this.consultantsService.deleteConsultant(c)
        .subscribe(data=>{
          this.onGetAllConsultants();
        })
  }

  onGetInterneConsultants() {
    this.ls =this.consultantsService.getInterneConsultants().subscribe(
      data=>{
        this.ls=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  onGetExterneConsultants() {
    this.ls =this.consultantsService.getExterneConsultants().subscribe(
      data=>{
        this.ls=data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  onNewConsultants() {
    this.router.navigateByUrl("/addConsultant")

  }

  onEdit(c: Consultant) {
    this.router.navigateByUrl("/editConsultant/"+c.id)

  }

  OnActionEvent($event: ActionEvent) {
    console.log($event.type);
    switch ($event.type){
      case ConsultantActionsTypes.GET_ALL_CONSULTANT:this.onGetAllConsultants();break;
      case ConsultantActionsTypes.GET_EXTERNE_CONSULTANT:this.onGetExterneConsultants();break;
      case ConsultantActionsTypes.GET_INTERNE_CONSULTANT:this.onGetInterneConsultants();break;
      case ConsultantActionsTypes.NEW_CONSULTANT:this.onNewConsultants();break;
      case ConsultantActionsTypes.SEARCH_CONSULTANT:this.onSearch($event.payload);break;
      case ConsultantActionsTypes.DELETE_CONSULTANT:this.onDelete($event.payload);break;
      case ConsultantActionsTypes.EDIT_CONSULTANT:this.onEdit($event.payload);break;
    }

  }
}
