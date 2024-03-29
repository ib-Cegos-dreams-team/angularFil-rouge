import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { FormationsListComponent } from './pages/formations-page/formations-list/formations-list.component';
import { FormationThemeComponent} from './pages/formations-page/formation-theme/formation-theme.component';
import { FormationDetailsComponent } from './pages/formations-page/formation-details/formation-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'formations', component: FormationsListComponent },
    { path: 'formations/formation-theme', component: FormationThemeComponent },
    { path: 'formations/formation-theme/formation-details', component: FormationDetailsComponent },
    { path: '**', component: NotFoundComponent }
];
