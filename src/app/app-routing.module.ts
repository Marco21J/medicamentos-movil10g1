import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'paises',
    pathMatch: 'full'
  },
  {
    path: 'paises',
    loadChildren: () => import('./pages/paises/paises/paises.module').then( m => m.PaisesPageModule)
  },
  {
    path: 'pais',
    loadChildren: () => import('./pages/paises/pais/pais.module').then( m => m.PaisPageModule)
  },
  {
    path: 'pais/:id',
    loadChildren: () => import('./pages/paises/pais-edit/pais-edit.module').then( m => m.PaisEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
