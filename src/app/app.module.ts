import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/application/home/home.component';
import { SurveysRoutingModule } from './modules/application/surveys/surveys-routing.module';


@NgModule({
  imports: [
    AppRoutingModule,
    SurveysRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
   
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    //NotFoundComponent,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
