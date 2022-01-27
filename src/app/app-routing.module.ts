import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'question', 
    loadChildren: () => import('./module/question/question.module').then(m => m.QuestionModule)
  },
  {
    path: '',
    redirectTo: 'question/builder',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: 'question/builder',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
