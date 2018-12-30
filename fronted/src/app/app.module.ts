import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './shared/user/user.component';
import { EndComponent } from './end/end.component';


const appRoutes: Routes = [
  { path: "usersList", component: UserListComponent},
  { path: "", component: AppComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
