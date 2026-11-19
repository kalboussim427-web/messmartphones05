import { Routes } from '@angular/router';
import { SmartphonesComponent } from './smartphones/smartphones';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';
import { ForbiddenComponent } from './services/forbidden/forbidden';
import { LoginComponent } from './login/login';
import { SmartphoneGuard } from './smartphone.guard';
import { LoggedInGuard } from './logged-in.guard';
import { ListeMarquesComponent } from './liste-marques/liste-marques';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'smartphones', component: SmartphonesComponent, canActivate: [LoggedInGuard] },
  { path: 'add-smartphone', component: AddSmartphoneComponent, canActivate: [SmartphoneGuard] },
  { path: 'updateSmartphone/:id', component: UpdateSmartphoneComponent, canActivate: [SmartphoneGuard] },
  { path: 'rechercheParMarque', component: RechercheParMarqueComponent, canActivate: [LoggedInGuard] },
  { path: 'rechercheParNom', component: RechercheParNomComponent, canActivate: [LoggedInGuard] },
  { path: 'listeMarques', component: ListeMarquesComponent, canActivate: [SmartphoneGuard] },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
