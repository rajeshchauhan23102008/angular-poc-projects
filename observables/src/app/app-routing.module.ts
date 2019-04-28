import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '**', redirectTo: '' }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutingModule { }
