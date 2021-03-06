import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MaterialModuleCrud} from "./material.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from "./components/user/user.service";
import { HttpClientModule } from "@angular/common/http";
import { UserAddComponent } from './components/user/user-new/user-add.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  { path: "", component: HomeComponent},
  { path: "usersList", component: UserListComponent},
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
    UserAddComponent,
    UserAddComponent,
    HomeComponent,
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
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
