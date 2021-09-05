import { Injectable } from '@angular/core';
import {QuizList} from '../entitys/QuizList';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategorys(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8080/quiz-fest/api/category');
  }

  public getQuizzesFromCategory(name: string): Observable<QuizList[]>{
    return (this.http.get<QuizList[]>('http://localhost:8080/quiz-fest/api/category/'+name));
  }
}
