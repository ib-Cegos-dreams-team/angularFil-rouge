import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { CreationCompteComponent } from './pages/compte/creation-compte/creation-compte.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'creation-compte', component: CreationCompteComponent},
    { path: '**', component: NotFoundComponent }
];
