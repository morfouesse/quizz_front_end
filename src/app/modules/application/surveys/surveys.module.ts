import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveysComponent } from './surveys.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { SurveyHttpClientService } from '../../shared/services/survey-http-client-service/survey-http-client.service';


@NgModule({
  // les imports dont j'ai besoins pour le component ou l'HTML
  imports: [
    CommonModule,
    SurveysRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
  
  ],
  // Définit la liste des composants pouvant être utilisés par les modules qui importent celui-ci.
  exports: [
 
  ],
  //Les composants , directives et canaux qui appartiennent à ce NgModule.
  declarations: [
    SurveysComponent,
  ],
  //les services dont j'ai besoin pour ce component
  providers: [
    SurveyHttpClientService
  ],
})
export class SurveysModule { }
