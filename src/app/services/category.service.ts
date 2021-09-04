import { Injectable } from '@angular/core';
import {QuizList} from '../entitys/QuizList';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategorys(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8080/quiz-fest/api/category');
    //return of(['Category1', 'Category2', 'Category3', 'Category4']);
  }

  public getQuizzesFromCategory(name: string): Observable<QuizList[]>{
    return (this.http.get<QuizList[]>('http://localhost:8080/quiz-fest/api/category/'+name));
   /* this.http.get('http://localhost:8080/quiz-fest/api/category/Natur').toPromise().then( res => {
      console.log(res);
    });
    return of([{title: 'xyz', linkToEdit: '', linkToPlay: ''},
      {title: 'abc', linkToEdit: '', linkToPlay: ''},
      {title: 'skdgjosdihgoi sdfgidofihgihdiofhg oiehdoihaiert09eß0risbfgvmnbeaär ituhoiahhtjfgbdfiu hguirheishgibsykjdfbg', linkToEdit: '', linkToPlay: ''}]);//*/
  }
}
