import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  questions: any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.$questions.subscribe((data: any) => {
      this.questions = data.questions;
    });
  }

}
