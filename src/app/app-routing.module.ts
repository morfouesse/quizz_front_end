import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/application/home/home.component';
import { SurveysComponent } from './modules/application/surveys/surveys.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'quizz',
    loadChildren: () => import('./modules/application/surveys/surveys.module')
      .then(mod => mod.SurveysModule)
 //   path: 'quizz/surveys', component: SurveysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
