import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-petition',
    loadChildren: () => import('./add-petition/add-petition.module').then( m => m.AddPetitionPageModule)
  },
  {
    path: 'edit-petition/:id',
    loadChildren: () => import('./edit-petition/edit-petition.module').then( m => m.EditPetitionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
