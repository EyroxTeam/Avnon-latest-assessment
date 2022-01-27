import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions = new BehaviorSubject({})
  $questions = this.questions.asObservable();
  
  constructor() { }
}
