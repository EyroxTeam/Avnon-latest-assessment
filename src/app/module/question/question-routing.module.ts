import { QuestionComponent } from './question/question.component';
import { BuilderComponent } from './builder/builder.component';
import { AnswerComponent } from './answer/answer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: QuestionComponent, 
    children: [
      {path: 'answer', component: AnswerComponent},
      {path: 'builder', component: BuilderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuestionRoutingModule { }
export const routingComponent = [AnswerComponent, BuilderComponent, QuestionComponent]