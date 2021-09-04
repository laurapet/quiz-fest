import { Component, OnInit } from '@angular/core';
import {Answer} from "../entitys/Answer";

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent {

  answers: Answer[];

  constructor() {
    this.answers = [{text: "jhsdkjfh", inCorrect: null}, {text: "slkdjflkjsd", inCorrect: null}];
  }


}
