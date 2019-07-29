import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'affectations', loadChildren: './pages/affectation-details/affectation-details.module#AffectationDetailsPageModule' },
  { path: 'affectations/:id', loadChildren: './pages/affectation-details/affectation-details.module#AffectationDetailsPageModule' },
  { path: 'ordinateurs', loadChildren: './pages/ordinateur-details/ordinateur-details.module#OrdinateurDetailsPageModule' },
  { path: 'ordinateurs/:id', loadChildren: './pages/ordinateur-details/ordinateur-details.module#OrdinateurDetailsPageModule' },
  { path: 'utilisateurs', loadChildren: './pages/utilisateur-details/utilisateur-details.module#UtilisateurDetailsPageModule' },
  { path: 'utilisateurs/:id', loadChildren: './pages/utilisateur-details/utilisateur-details.module#UtilisateurDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
