import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MaterialModuleCrud} from "./modules/material-crud.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserListService } from "./components/user/user-list/user-list.service";
import { HttpClientModule } from "@angular/common/http";
import { UserAddComponent } from './components/user/user-add/user-add.component';
import {FormsModule} from "@angular/forms";
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  { path: "usersList", component: UserListComponent},
  { path: "", component: HomeComponent},
  { path: "users/new", component: UserAddComponent},
  { path: "users", component: UserListComponent},
  { path: "users/:id", component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserComponent,
    FooterComponent,
    UserAddComponent,
    UserAddComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModuleCrud
  ],
  providers: [
    UserListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
