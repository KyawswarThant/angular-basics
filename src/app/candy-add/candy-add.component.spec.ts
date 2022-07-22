import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyAddComponent } from './candy-add.component';

describe('CandyAddComponent', () => {
  let component: CandyAddComponent;
  let fixture: ComponentFixture<CandyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandyAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
