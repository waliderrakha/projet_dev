import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {HomeComponent} from './components/home/home.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConsultantAddComponent} from './components/consultant-add/consultant-add.component';
import {ConsultantEditComponent} from './components/consultant-edit/consultant-edit.component';
import {ConsultantNavBarComponent} from './components/consultant/consultant-nav-bar/consultant-nav-bar.component';
import {ConsultantListComponent} from './components/consultant/consultant-list/consultant-list.component';
import {ConsultantItemComponent} from './components/consultant/consultant-item/consultant-item.component';
import {ClientComponent} from './components/client/client.component';
import {ContactComponent} from './components/contact/contact.component';
import {ProjetComponent} from './components/projet/projet.component';
import {PhaseComponent} from './components/phase/phase.component';
import {AddContactComponent} from './components/contact/add-contact/add-contact.component';
import {AddProjetComponent} from './components/projet/add-projet/add-projet.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddPhaseComponent} from './components/phase/add-phase/add-phase.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddClientComponent} from './components/add-client/add-client.component';
import {ConsultantDetailComponent} from './components/consultant-detail/consultant-detail.component';
import { LoginComponent } from './components/user/login/login.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ClientContactComponent } from './components/client-contact/client-contact.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ProjetDetailComponent } from './components/projet-detail/projet-detail.component';
import { ProjetPhaseComponent } from './components/projet-phase/projet-phase.component';
import { UpdateProfilComponent } from './components/user/update-profil/update-profil.component';
import { FicheTempsComponent } from './components/fiche-temps/fiche-temps.component';
import { LigneficheTempsComponent } from './components/lignefiche-temps/lignefiche-temps.component';
import { AddFichetempsComponent } from './components/fiche-temps/add-fichetemps/add-fichetemps.component';
import { AddLigneficheComponent } from './components/lignefiche-temps/add-lignefiche/add-lignefiche.component';

import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UpdateFichetempsComponent } from './components/update-fichetemps/update-fichetemps.component';

const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ConsultantComponent,
    HomeComponent,
    NavBarComponent,
    ConsultantAddComponent,
    ConsultantEditComponent,
    ConsultantNavBarComponent,
    ConsultantListComponent,
    ConsultantItemComponent,
    ClientComponent,
    ContactComponent,
    ProjetComponent,
    PhaseComponent,
    AddContactComponent,
    AddProjetComponent,
    NavbarComponent,
    AddPhaseComponent,
    SidebarComponent,
    AddClientComponent,
    ConsultantDetailComponent,
    LoginComponent,
    ListUserComponent,
    RegisterComponent,
    ClientDetailComponent,
    ClientContactComponent,
    ClientEditComponent,
    ContactEditComponent,
    ContactDetailComponent,
    ProjetDetailComponent,
    ProjetPhaseComponent,
    UpdateProfilComponent,
    FicheTempsComponent,
    LigneficheTempsComponent,
    AddFichetempsComponent,
    AddLigneficheComponent,
    UpdateFichetempsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxPaginationModule,

        MatDialogModule,
        ToastrModule.forRoot(),
        MatToolbarModule,
        MatIconModule,


    ],

  providers: [{provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
 // entryComponents: [AddLigneficheComponent],
})
export class AppModule {
}
