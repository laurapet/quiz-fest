import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getAllCategorys(): string[]{
    return [];
  }

  public getQuizzesFromCategory(name: string): QuizList[]{
    return [];
  }
}
