import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {HomeComponent} from './components/home/home.component';
import {ConsultantAddComponent} from './components/consultant-add/consultant-add.component';
import {ConsultantEditComponent} from './components/consultant-edit/consultant-edit.component';
import {ClientComponent} from './components/client/client.component';
import {ContactComponent} from './components/contact/contact.component';
import {AddContactComponent} from './components/contact/add-contact/add-contact.component';
import {ProjetComponent} from './components/projet/projet.component';
import {AddProjetComponent} from './components/projet/add-projet/add-projet.component';
import {AddPhaseComponent} from './components/phase/add-phase/add-phase.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

const routes: Routes = [
  {path: 'consultant', component: ConsultantComponent},
  {path: 'addConsultant', component: ConsultantAddComponent},
  {path: 'editConsultant/:id', component:ConsultantEditComponent },
  {path:"",component:SidebarComponent},
  {path: 'client', component:ClientComponent },
  {path: 'contact', component:ContactComponent },
  {path: 'addContact', component:AddContactComponent},
  {path: 'projets', component:ProjetComponent},
  {path: 'addprojet', component:AddProjetComponent},
  {path: 'addphase', component:AddPhaseComponent},
  {path: 'navtest', component:NavbarComponent},
  {path: 'sidebar', component:SidebarComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
