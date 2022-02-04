import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DuctorsComponent } from './compomians/ductors/ductors.component';
import { RatingComponent } from './compomians/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DuctorsComponent,
    RatingComponent,
    FormsComponent,
    HomeComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule, 
     BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'sign', component:  FormsComponent },
   
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
