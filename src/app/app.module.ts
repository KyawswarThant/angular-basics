import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CandyListComponent } from './candy-list/candy-list.component';
import { CandyDetailComponent } from './candy-detail/candy-detail.component';
import { CandyEditComponent } from './candy-edit/candy-edit.component';
import { CandyAddComponent } from './candy-add/candy-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CandyListComponent,
    CandyDetailComponent,
    CandyEditComponent,
    CandyAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
