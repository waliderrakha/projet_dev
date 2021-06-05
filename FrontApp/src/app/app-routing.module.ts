import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {AddClientComponent} from './components/add-client/add-client.component';
import {ConsultantDetailComponent} from './components/consultant-detail/consultant-detail.component';
import {LoginComponent} from './components/user/login/login.component';
import {ListUserComponent} from './components/user/list-user/list-user.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ClientDetailComponent} from './components/client-detail/client-detail.component';
import {ClientContactComponent} from './components/client-contact/client-contact.component';
import {ClientEditComponent} from './components/client-edit/client-edit.component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';
import {ProjetDetailComponent} from './components/projet-detail/projet-detail.component';
import {ProjetPhaseComponent} from './components/projet-phase/projet-phase.component';
import {UpdateProfilComponent} from './components/user/update-profil/update-profil.component';
import {FicheTempsComponent} from './components/fiche-temps/fiche-temps.component';
import {AddFichetempsComponent} from './components/fiche-temps/add-fichetemps/add-fichetemps.component';
import {AddLigneficheComponent} from './components/lignefiche-temps/add-lignefiche/add-lignefiche.component';

const routes: Routes = [
  {
    path: "", component: SidebarComponent, children: [
      {path: 'consultant', component: ConsultantComponent},
      {path: 'addConsultant', component: ConsultantAddComponent},
      {path: 'editConsultant/:id', component: ConsultantEditComponent},
      {path: 'client', component: ClientComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'addContact', component: AddContactComponent},
      {path: 'projets', component: ProjetComponent},
      {path: 'addprojet', component: AddProjetComponent},
      {path: 'addphase', component: AddPhaseComponent},
      {path: 'navtest', component: SidebarComponent},
      {path: 'addclient', component: AddClientComponent},
      {path: 'detailconsultant/:id', component: ConsultantDetailComponent},
      {path: 'detailclient/:id', component:ClientDetailComponent},
      {path: 'clientcontact/:id', component:ClientContactComponent},
      {path: 'editclient/:id', component: ClientEditComponent},
      {path: 'detailcontact/:id', component: ContactDetailComponent},
      {path: 'detailprojet/:id', component: ProjetDetailComponent},
      {path: 'projetphase/:id', component:ProjetPhaseComponent},

    ]

  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'listuser', component: ListUserComponent},
  {path: 'updateprofil', component: UpdateProfilComponent},
  {path: "", redirectTo:"/login",pathMatch:"full"},
  {path: 'addfichetemps',component:AddFichetempsComponent},
  {path: 'addlignefiche',component:AddLigneficheComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
