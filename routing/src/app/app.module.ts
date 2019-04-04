import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { CanDeactivateGuard } from './_guards/candeactivate.guard';
import { ServerResolver } from './_guards/server.resolver';
import { ServersService } from './_services/servers.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    ServerEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard, ServerResolver, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
