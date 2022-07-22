import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Candy } from '../candy'
import { CandyService } from '../candy.service';

@Component({
  selector: 'app-candy-detail',
  templateUrl: './candy-detail.component.html',
  styleUrls: ['./candy-detail.component.css']
})
export class CandyDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private candyService: CandyService,
    private router: Router
  ) { }
  candy: Candy | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const routeParamsId = Number(routeParams.get('cid'));
    this.candyService.getCandies().forEach(candies => {
      candies.forEach(candy => {
        if(candy.id == routeParamsId) this.candy = candy;
      })
    })
  }

  deleteCandy(id: number) {
    this.candyService.deleteCandy(id);
    this.router.navigateByUrl('')
  }
}
