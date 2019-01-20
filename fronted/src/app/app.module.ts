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


const appRoutes: Routes = [
  { path: "usersList", component: UserListComponent},
  //{ path: "", component: AppComponent},
  //{ path: "users", component: UserListComponent},
  { path: "users", component: UserListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
