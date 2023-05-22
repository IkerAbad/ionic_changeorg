import { Component, OnInit } from '@angular/core';
import { PetitionService } from '../shared/petition.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Petitions: any = [];
  constructor(
    private petitionService: PetitionService
  ) {
  }
  ngOnInit() { }
  ionViewDidEnter() {
    this.petitionService.getPetitionList().subscribe((res) => {
      console.log(res)
      this.Petitions = res;
    })
  }
  deletePetition(petition:any, i:number) {
    if (window.confirm('Do you want to delete the petition?')) {
      this.petitionService.deletePetition(petition._id)
        .subscribe(() => {
          this.Petitions.splice(i, 1);
          console.log('Petition deleted!')
        }
        )
    }
  }
}
