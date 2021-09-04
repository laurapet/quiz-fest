import {Component, Input} from '@angular/core';
import {Answer} from "../entitys/Answer";
import {ModalController} from "@ionic/angular";
import {PlayService} from "../services/play.service";
import {PlayQuiz} from "../entitys/PlayQuiz";
import {Result} from "../entitys/Result";

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent {

  answers: Answer[];
  quiz: PlayQuiz;
  result: Result;
  @Input() title: string;
  @Input() link: string;

  constructor(public modalController: ModalController, public playService: PlayService) {
    this.quiz = playService.selectQuiz(this.link);
    this.answers = [{text: "jhsdkjfh", inCorrect: null}, {text: "slkdjflkjsd", inCorrect: null}];
  }


  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  answerQuestion(nr: number){
    this.result = this.playService.answerQuestion(this.quiz, nr);
  }
}
