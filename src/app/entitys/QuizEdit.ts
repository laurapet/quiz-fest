import {Question} from './Question';

export interface QuizEdit{
  categoryName: string;
  title: string;
  questions: Question[];
}
