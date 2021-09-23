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

  public createQuiz(quiz: QuizEdit): Observable<QuizEdit>{
    const quizToCreate = {title: quiz.title, categoryName: {name: quiz.categoryName}, questions: quiz.questions};
    return this.http.post<QuizEdit>('/quizzes', quizToCreate);
  }

  public updateQuiz(quiz: QuizEdit, link: string): Observable<QuizEdit>{
    const quizToUpdate = {title: quiz.title, categoryName: {name: quiz.categoryName}, questions: quiz.questions};
    return this.http.put<QuizEdit>('/'+link,quizToUpdate);
  }

  public getOwnQuizzes(): Observable<QuizList[]>{
    return (this.http.get<QuizList[]>('/quizzes'));
  }

  public deleteQuiz(quiz: QuizList){
    return this.http.delete('/'+quiz.linkToEdit).subscribe((res) => console.log(res));
  }

  getQuizToEdit(link: string): Observable<QuizEdit>{
    return this.http.get<QuizEdit>('/'+link);
  }


  public getDefaultAnswers(): Answer[]{
    return  [{text: 'correct answer', isCorrect: true},
      {text: 'incorrect answer', isCorrect: false}];
  }

}
