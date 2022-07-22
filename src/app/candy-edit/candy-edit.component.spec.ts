import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyEditComponent } from './candy-edit.component';

describe('CandyEditComponent', () => {
  let component: CandyEditComponent;
  let fixture: ComponentFixture<CandyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
