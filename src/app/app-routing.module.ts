import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandyAddComponent } from './candy-add/candy-add.component';
import { CandyDetailComponent } from './candy-detail/candy-detail.component';
import { CandyEditComponent } from './candy-edit/candy-edit.component';
import { CandyListComponent } from './candy-list/candy-list.component';

const routes: Routes = [
  {path: "", component: CandyListComponent},
  {path: "candy/:cid", component: CandyDetailComponent},
  {path: "candy/:cid/edit", component: CandyEditComponent},
  {path: "add_candy", component: CandyAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
