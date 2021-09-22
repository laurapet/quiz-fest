import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizEdit } from '../entitys/QuizEdit';
import { QuizList } from '../entitys/QuizList';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../entitys/Answer';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EditQuizService {

  public quizToEdit: QuizEdit;

  constructor(private http: HttpClient, public toastController: ToastController) {
    this.quizToEdit = {categoryName:'', title:'', questions:[]};
  }

  public createQuiz(quiz: QuizEdit): Observable<QuizEdit>{
    const quizToCreate = {title: quiz.title, categoryName: {name: quiz.categoryName}, questions: quiz.questions};
    return this.http.post<QuizEdit>('/play', quizToCreate);
  }

  public updateQuiz(quiz: QuizEdit, link: string): Observable<QuizEdit>{
    const quizToUpdate = {title: quiz.title, categoryName: {name: quiz.categoryName}, questions: quiz.questions};
    return this.http.put<QuizEdit>('/'+link,quizToUpdate);
  }

  public getDefaultAnswers(): Answer[]{
    return  [{text: 'correct answer', isCorrect: true},
      {text: 'incorrect answer', isCorrect: false}];
  }


  public getOwnQuizzes(): Observable<QuizList[]>{
    return (this.http.get<QuizList[]>('/play'));
  }

  public deleteQuiz(quiz: QuizList) /*:Observable<any> */{
    console.log(quiz);
    const link: any = quiz.linkToEdit;
    console.log(link);
    return this.http.delete('/'+quiz.linkToEdit).subscribe((res) => console.log(res));
  }

  getQuizToEdiz(link: string): Observable<QuizEdit>{
    return this.http.get<QuizEdit>('/'+link);
  }

  async showBadRequestToast(message: string) {
    const toast = await this.toastController.create({
      message,
      //duration: 2000,
      buttons: [
        {
          side: 'end',
          text: 'close'
        }
      ]
    });
    toast.present();
  }
}
