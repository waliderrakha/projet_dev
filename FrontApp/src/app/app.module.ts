import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultantComponent } from './components/consultant/consultant.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConsultantAddComponent } from './components/consultant-add/consultant-add.component';
import { ConsultantEditComponent } from './components/consultant-edit/consultant-edit.component';
import { ConsultantNavBarComponent } from './components/consultant/consultant-nav-bar/consultant-nav-bar.component';
import { ConsultantListComponent } from './components/consultant/consultant-list/consultant-list.component';
import { ConsultantItemComponent } from './components/consultant/consultant-item/consultant-item.component';
import { ClientComponent } from './components/client/client.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetComponent } from './components/projet/projet.component';
import { PhaseComponent } from './components/phase/phase.component';
import { AddContactComponent } from './components/contact/add-contact/add-contact.component';

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
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
