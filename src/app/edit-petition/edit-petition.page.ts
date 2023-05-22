import { Component, OnInit } from '@angular/core';
import { PetitionService } from '../shared/petition.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-edit-petition',
  templateUrl: './edit-petition.page.html',
  styleUrls: ['./edit-petition.page.scss'],
})
export class EditPetitionPage implements OnInit {
  updatePetitionForm!: FormGroup;

  id: any;
  constructor(
    private petitionAPI: PetitionService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getPetitionData(this.id);
    this.updatePetitionForm = this.fb.group({
      title: [''],
      description: ['']
    })
  }
  getPetitionData(id:number) {
    this.petitionAPI.getPetition(id).subscribe(res => {
      this.updatePetitionForm.setValue({
       // song_name: res['song_name'],
        //description: res['description']

        title: [''],
        description: ['']
      });
    });
  }
  updateForm() {
    if (!this.updatePetitionForm.valid) {
      return false;
    } else {
      this.petitionAPI.updatePetition(this.id, this.updatePetitionForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updatePetitionForm.reset();
          this.router.navigate(['/home']);
        })
        return true;
    }
  }
}
