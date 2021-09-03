import { Injectable } from '@angular/core';
import {QuizList} from '../entitys/QuizList';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getAllCategorys(): string[]{
    return ['Category1', 'Category2', 'Category3', 'Category4'];
  }

  public getQuizzesFromCategory(name: string): QuizList[]{
    return [{title: 'xyz', linkToEdit: '', linkToPlay: ''},
      {title: 'abc', linkToEdit: '', linkToPlay: ''},
      {title: 'skdgjosdihgoi sdfgidofihgihdiofhg oiehdoihaiert09eß0risbfgvmnbeaär ituhoiahhtjfgbdfiu hguirheishgibsykjdfbg', linkToEdit: '', linkToPlay: ''}];
  }
}
