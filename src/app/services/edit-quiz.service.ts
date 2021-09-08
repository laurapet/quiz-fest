import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizEdit } from '../entitys/QuizEdit';
import { QuizList } from '../entitys/QuizList';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditQuizService {

  constructor(private http: HttpClient) { }

  public createQuiz(quiz: QuizEdit){

  }

  public updateQuiz(quiz: QuizEdit){

  }

  public getOwnQuizzes(): /**/Observable<QuizList[]>{
    /*
    let ownQuizzes: QuizList[];
    ownQuizzes = [{title: 'Naturquiz', linkToEdit: '', linkToQuiz: ''},
    {title: 'abc', linkToEdit: '', linkToQuiz: ''},
    {title: 'Kultur 101', linkToEdit: '', linkToQuiz: ''}];
    return ownQuizzes;*/
    return (this.http.get<QuizList[]>('/quizzes'));
  }
}
