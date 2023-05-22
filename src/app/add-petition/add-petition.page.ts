import { Component, OnInit, NgZone } from '@angular/core';
import { PetitionService } from '../shared/petition.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-petition',
  templateUrl: './add-petition.page.html',
  styleUrls: ['./add-petition.page.scss'],
})
export class AddPetitionPage implements OnInit {
  petitionForm: FormGroup;
  constructor(
    private petitionAPI: PetitionService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.petitionForm = this.fb.group({
      title: [''],
      description: ['']
    })
  }
  ngOnInit() { }
  onFormSubmit() {
    if (!this.petitionForm.valid) {
      return false;
    } else {
      this.petitionAPI.addPetition(this.petitionForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.petitionForm.reset();
            this.router.navigate(['/home']);
          })
        });
        return true;
    }
  }
}
