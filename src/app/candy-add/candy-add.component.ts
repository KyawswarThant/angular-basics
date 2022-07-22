import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router'
import { CandyService } from '../candy.service';

@Component({
  selector: 'app-candy-add',
  templateUrl: './candy-add.component.html',
  styleUrls: ['./candy-add.component.css']
})
export class CandyAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private candyService: CandyService,
    private router: Router
  ) { }
  addForm = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    price: ''
  })

  ngOnInit(): void {
  }

  addCandy() {
    this.candyService.addCandy(this.addForm.value)
    this.router.navigateByUrl('');
  }
}
