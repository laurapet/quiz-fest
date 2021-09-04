import { Injectable } from '@angular/core';
import {PlayQuiz} from "../entitys/PlayQuiz";
import {Result} from "../entitys/Result";

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  public selectQuiz(ID: string): PlayQuiz{
    return {
      currentPoints: 0,
      currentQuestion: {
        text: "question text ksjkdfkjdkjfkjsdfsddf kjcvkjsdkjfs?",
        answers: [
          {
            text: 'lsdflsdf',
            inCorrect: undefined
          },
          {
            text: 'ihdfhsdf',
            inCorrect: undefined
          }
        ],
        nr: 1
      },
      title: ''
    };
  }

  public nextQuestion(quiz: PlayQuiz): PlayQuiz{
    return null;
  }

  public answerQuestion(quiz: PlayQuiz, answer: number): Result{
    return null;
  }
}
