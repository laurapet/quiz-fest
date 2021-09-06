import { Injectable } from '@angular/core';
import { QuizEdit } from '../entitys/QuizEdit';
import { QuizList } from '../entitys/QuizList';

@Injectable({
  providedIn: 'root'
})
export class EditQuizService {

  constructor() { }

  public createQuiz(quiz: QuizEdit){

  }

  public updateQuiz(quiz: QuizEdit){

  }

  public getOwnQuizzes(): QuizList[]{
    let ownQuizzes: QuizList[];
    ownQuizzes = [{title: 'Naturquiz', linkToEdit: '', linkToPlay: ''},
    {title: 'abc', linkToEdit: '', linkToPlay: ''},
    {title: 'Kultur 101', linkToEdit: '', linkToPlay: ''}];
    return ownQuizzes;
  }
}
