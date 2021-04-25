import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {HomeComponent} from './components/home/home.component';
import {ConsultantAddComponent} from './components/consultant-add/consultant-add.component';
import {ConsultantEditComponent} from './components/consultant-edit/consultant-edit.component';
import {ClientComponent} from './components/client/client.component';
import {ContactComponent} from './components/contact/contact.component';
import {AddContactComponent} from './components/contact/add-contact/add-contact.component';

const routes: Routes = [
  {path: 'consultant', component: ConsultantComponent},
  {path: 'addConsultant', component: ConsultantAddComponent},
  {path: 'editConsultant/:id', component:ConsultantEditComponent },
  {path:"",component:HomeComponent},
  {path: 'client', component:ClientComponent },
  {path: 'contact', component:ContactComponent },
  {path: 'addContact', component:AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
