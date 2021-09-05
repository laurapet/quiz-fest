import { Injectable } from '@angular/core';
import {Result} from '../entitys/Result';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PlayQuestion} from '../entitys/PlayQuestion';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private http: HttpClient) { }

  public selectQuiz(linkToQuiz: string): Observable<PlayQuestion>{
    return this.http.get<PlayQuestion>('/'+linkToQuiz);
  }

  public nextQuestion(linkToQuestion: string): Observable<PlayQuestion>{
    return this.http.get<PlayQuestion>(linkToQuestion);
  }

  public answerQuestion(quiz: string, answer: number): Observable<Result>{
    return this.http.post<Result>(quiz+'/'+answer,{});
  }
}
