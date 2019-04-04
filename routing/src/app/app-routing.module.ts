import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { UsersComponent } from '../app/users/users.component';
import { UserComponent } from '../app/users/user/user.component';
import { ServersComponent } from '../app/servers/servers.component';
import { ServerComponent } from '../app/servers/server/server.component';
import { ServerEditComponent } from '../app/servers/server-edit/server-edit.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { AuthGuard } from './_guards/auth.guard';
import { CanDeactivateGuard } from './_guards/candeactivate.guard';
import { ServerResolver } from './_guards/server.resolver';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
    {
        path: 'servers',
        //canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [
            {
                path: ':id',
                //data: { serverid: '102' },
                resolve: {server: ServerResolver},
                component: ServerComponent
            },
            { path: ':id/edit', component: ServerEditComponent, canDeactivate: [CanDeactivateGuard] }
        ]
    },
    { path: 'pagenotfound', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/pagenotfound' }
];

@NgModule({

    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
