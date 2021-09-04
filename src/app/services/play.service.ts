import { Injectable } from '@angular/core';
import {PlayQuiz} from "../entitys/PlayQuiz";
import {Result} from "../entitys/Result";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PlayQuestion} from "../entitys/PlayQuestion";

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private http: HttpClient) { }

  public selectQuiz(linkToQuiz: string): Observable<PlayQuestion>{
    return this.http.get<PlayQuestion>('http://localhost:8080/quiz-fest/api/'+linkToQuiz);
    /*return of({
        text: 'question text ksjkdfkjdkjfkjsdfsddf kjcvkjsdkjfs?',
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
      });*/
  }

  public nextQuestion(quiz: PlayQuiz): Observable<PlayQuestion>{
    return null;
  }

  public answerQuestion(quiz: PlayQuiz, answer: number): Observable<Result>{
    return this.http.post<Result>('http://localhost:8080/quiz-fest/api'+'/quizzes/100/play/1/'+answer,{});
  }
}
