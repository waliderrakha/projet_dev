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
    ConsultantItemComponent
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
