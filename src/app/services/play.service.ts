import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  public selectQuiz(ID: string): PlayQuiz{
    return null;
  }

  public nextQuestion(quiz: PlayQuiz): PlayQuiz{
    return null;
  }

  public answerQuestion(quiz: PlayQuiz, answer: number): Result{
    return null;
  }
}
