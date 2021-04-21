import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {HomeComponent} from './components/home/home.component';
import {ConsultantAddComponent} from './components/consultant-add/consultant-add.component';
import {ConsultantEditComponent} from './components/consultant-edit/consultant-edit.component';

const routes: Routes = [
  {path: 'consultant', component: ConsultantComponent},
  {path: 'addConsultant', component: ConsultantAddComponent},
  {path: 'editConsultant/:id', component:ConsultantEditComponent },
  {path:"",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
