import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPetitionPage } from './edit-petition.page';

const routes: Routes = [
  {
    path: '',
    component: EditPetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPetitionPageRoutingModule {}
