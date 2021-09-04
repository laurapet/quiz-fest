import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../entitys/Answer";
import {ModalController} from "@ionic/angular";
import {PlayService} from "../services/play.service";
import {PlayQuiz} from "../entitys/PlayQuiz";
import {Result} from "../entitys/Result";
import {Haptics} from "@capacitor/haptics";

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent implements OnInit{

  endReached = false;
  quiz: PlayQuiz;
  result: Result;
  @Input() title: string;
  @Input() link: string;
  private answered: boolean;

  constructor(public modalController: ModalController, public playService: PlayService) {
  }

  ngOnInit() {
    console.log(this.link);
    this.getQuiz();
  }


  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async answerQuestion(nr: number){
    this.result = this.playService.answerQuestion(this.quiz, nr);

    for(let i=0; i < this.quiz.currentQuestion.answers.length; i++){
      if(this.result.correctAnswer === i){
        this.quiz.currentQuestion.answers[i].inCorrect = true;
      } else {
        this.quiz.currentQuestion.answers[i].inCorrect = false;
      }
    }

    if(this.result.points === 0){
      await Haptics.vibrate();
    }else {
      this.quiz.currentPoints += this.result.points;
    }

  }

  selectColor(correct: boolean): string{
    if(correct===true){
      return 'success';
    }
    if(correct===false){
      return 'danger';
    }
    if(correct === undefined){
      return 'white';
    }
  }

  getQuiz(){
    this.playService.selectQuiz(this.link).subscribe((question)=>{
      this.quiz = {title: this.title,
                  currentQuestion: {
                      text: question.text,
                      answers: []
                  },
                  currentPoints: 0};
      for(let x  = 1; question.answers[x] != null; x++){
        console.log(question.answers[x]);
        this.quiz.currentQuestion.answers.push({text: question.answers[x], inCorrect: undefined});
      }
    });
  }

  async continue() {
    await new Promise(f => setTimeout(f, 1500));
    if(this.result != null){
      console.log(this.result);
      //this.dismiss();
      if(this.result.linkToNextQuestion != null && this.result.linkToNextQuestion !== ''){
        this.quiz = this.playService.nextQuestion(this.quiz);
      }else {
        this.endReached = true;
      }
      this.result = null;
    }

  }
}
