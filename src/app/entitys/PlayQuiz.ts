import {PlayQuestion} from './PlayQuestion';

export interface PlayQuiz{
  title: string;
  currentPoints: number;
  currentQuestion: PlayQuestion;
}
