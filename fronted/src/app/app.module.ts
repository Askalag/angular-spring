import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './shared/models/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserListService } from "./components/user-list/user-list.service";
import { HttpClientModule } from "@angular/common/http";
import { UserAddComponent } from './components/user-add/user-add.component';
import {FormsModule} from "@angular/forms";
import { UserEditComponent } from './user-edit/user-edit.component';
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
    FormsModule
  ],
  providers: [
    UserListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
