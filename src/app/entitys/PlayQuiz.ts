import {Question} from './Question';

export interface PlayQuiz{
  title: string;
  currentPoints: number;
  currentQuestion: Question;
}
