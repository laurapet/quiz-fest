import {Component, Input} from '@angular/core';
import {Answer} from "../entitys/Answer";
import {ModalController} from "@ionic/angular";
import {PlayService} from "../services/play.service";

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent {

  answers: Answer[];
  @Input() title: string;
  @Input() link: string;

  constructor(public modalController: ModalController, public playService: PlayService) {
    this.answers = [{text: "jhsdkjfh", inCorrect: null}, {text: "slkdjflkjsd", inCorrect: null}];
  }


  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  
}
