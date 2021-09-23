import { Injectable } from '@angular/core';
import {Result} from '../entitys/Result';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PlayQuestion} from '../entitys/PlayQuestion';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private question:PlayQuestion = {
    nr: 0,
    text: 'Example of a Question what it could look like?',
    answers: [
      '',
      'Answer 1',
      'Answer 2',
      'Answer 3',
      "Answer 4",
    ]
  };

  private result: Result = {
    correctAnswers: [3], linkToNextQuestion: "", points: 0

  }

  constructor(private http: HttpClient) { }

  public selectQuiz(linkToQuiz: string): Observable<PlayQuestion>{
    //return this.http.get<PlayQuestion>('/'+linkToQuiz);

    return of(this.question);
  }

  public nextQuestion(linkToQuestion: string): Observable<PlayQuestion>{
    //return this.http.get<PlayQuestion>(linkToQuestion);
    return of(this.question);
  }

  public answerQuestion(quiz: string, answer: number): Observable<Result>{
    //return this.http.post<Result>(quiz+'/'+answer,{});
    this.result.points = answer == 3 ? 100 : 0;
    return of(this.result);
  }
}
