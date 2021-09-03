import {Answer} from './Answer';

export interface PlayQuestion{
  text: string;
  answers: Answer[];
  nr: number;
}
