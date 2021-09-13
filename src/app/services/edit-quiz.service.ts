import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizEdit } from '../entitys/QuizEdit';
import { QuizList } from '../entitys/QuizList';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../entitys/Answer';

@Injectable({
  providedIn: 'root'
})
export class EditQuizService {

  public quizToEdit: QuizEdit;

  constructor(private http: HttpClient) {
    this.quizToEdit = {categoryName:'', title:'', questions:[]};
  }

  public createQuiz(quiz: QuizEdit){

  }

  public updateQuiz(quiz: QuizEdit){

  }

  public getDefaultAnswers(): Answer[]{
    return  [{text: 'correct answer', isCorrect: true},
      {text: 'incorrect answer', isCorrect: false}];
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
