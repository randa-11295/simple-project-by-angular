import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DuctorsComponent } from './compomians/ductors/ductors.component';
import { RatingComponent } from './compomians/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DuctorsComponent,
    RatingComponent,
    HomeComponent,
     
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule, 
    FormsModule,
     BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
   
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
