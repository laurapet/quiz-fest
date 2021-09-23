import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { QuizEdit } from '../entitys/QuizEdit';
import { QuizList } from '../entitys/QuizList';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../entitys/Answer';

@Injectable({
  providedIn: 'root'
})
export class EditQuizService {

  public quizToEdit: QuizEdit;

  public ownQuizzes: QuizList[] = [];
  public ownQuizzesToEdit: QuizEdit[] = [];
  public editableQuiz: QuizEdit = {
    title: 'test Userquiz',
    categoryName: 'Natur',
    questions: [{
      text: 'Frage 1?',
      answers: [
        {
          text: 'Antwort1',
          isCorrect: true
        },{
          text: 'Antwort2',
          isCorrect: false
        },
      ]
    }]
};

  constructor(private http: HttpClient) {
    this.quizToEdit = {categoryName:'', title:'', questions:[]};
  }

  public createQuiz(quiz: QuizEdit): Observable<QuizEdit>{
    const quizListElement: QuizList = {title: quiz.title, linkToQuiz: '', linkToEdit: ''};
    this.ownQuizzes.push(quizListElement);
    this.ownQuizzesToEdit.push(quiz);
    return of (quiz);
    //const quizToCreate = {title: quiz.title, categoryName: {name: quiz.categoryName}, questions: quiz.questions};
    //return this.http.post<QuizEdit>('/quizzes', quizToCreate);
  }

  public updateQuiz(quiz: QuizEdit, link: string): Observable<QuizEdit>{
    return of(quiz);
    //const quizToUpdate = {title: quiz.title, categoryName: {name: quiz.categoryName}, questions: quiz.questions};
    //return this.http.put<QuizEdit>('/'+link,quizToUpdate);
  }

  public getOwnQuizzes(): Observable<QuizList[]>{
    return of (this.ownQuizzes);
    //return (this.http.get<QuizList[]>('/quizzes'));
  }

  public deleteQuiz(quiz: QuizList){
    return of(quiz);
    //return this.http.delete('/'+quiz.linkToEdit).subscribe((res) => console.log(res));
  }

  getQuizToEdit(link: string): Observable<QuizEdit>{
    return of(this.editableQuiz);

    //return this.http.get<QuizEdit>('/'+link);
  }


  public getDefaultAnswers(): Answer[]{
    return  [{text: 'correct answer', isCorrect: true},
      {text: 'incorrect answer', isCorrect: false}];
  }

}
