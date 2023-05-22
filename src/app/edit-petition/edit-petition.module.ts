import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditPetitionPageRoutingModule } from './edit-petition-routing.module';
import { EditPetitionPage } from './edit-petition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    EditPetitionPageRoutingModule
  ],
  declarations: [EditPetitionPage]
})
export class EditPetitionPageModule {}
