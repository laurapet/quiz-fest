import { Injectable } from '@angular/core';
import {QuizList} from '../entitys/QuizList';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategorys(): Observable<string[]>{
    //return this.http.get<string[]>('/category');
    return of([
      'Nature',
      'Culture',
      'Sports',
      'Gaming'
    ]);
  }

  public getQuizzesFromCategory(name: string): Observable<QuizList[]>{
    //return (this.http.get<QuizList[]>('/category/'+name));
    return of([
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 1'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 2'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 3'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 4'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 5'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 6'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 7'}
    ]);
  }
}
