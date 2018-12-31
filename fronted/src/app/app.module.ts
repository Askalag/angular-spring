import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './shared/models/user/user.component';
import { EndComponent } from './components/end/end.component';
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";


const appRoutes: Routes = [
  { path: "usersList", component: UserListComponent},
  //{ path: "", component: AppComponent},
  { path: "users", component: UserListComponent},
  { path: "users", component: UserListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
