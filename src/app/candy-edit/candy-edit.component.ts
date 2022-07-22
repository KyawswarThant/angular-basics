import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import { Candy } from '../candy';
import { CandyService } from '../candy.service';

@Component({
  selector: 'app-candy-edit',
  templateUrl: './candy-edit.component.html',
  styleUrls: ['./candy-edit.component.css']
})
export class CandyEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private candyService: CandyService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  candy: Candy | undefined;
  editForm: any = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    price: ''
  })

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const routeParamsId = Number(routeParams.get('cid'));
    this.candyService.getCandies().forEach(candies => {
      candies.forEach(candy => {
        if(candy.id == routeParamsId) {
          this.candy = candy;
          this.editForm = this.formBuilder.group({
            id: this.candy.id,
            name: this.candy.name,
            description: this.candy.description,
            price: this.candy.price
          })
        }
      })
    })
  }

  updateCandy() {
    this.candyService.updateCandy(this.editForm.value.id, this.editForm.value)
    this.router.navigateByUrl(`candy/${this.editForm.value.id}`)
  }
}
