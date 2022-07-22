import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandyService } from '../candy.service';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.css']
})
export class CandyListComponent implements OnInit {

  constructor(private candyService: CandyService) { }

  candies!: Observable<{id: number, name: string, description: string, price: number}[]>
  ngOnInit(): void {
    this.candies = this.candyService.getCandies();
  }
}
