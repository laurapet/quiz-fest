import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {PlayService} from '../../services/play.service';
import {PlayQuiz} from '../../entitys/PlayQuiz';
import {Result} from '../../entitys/Result';
import {Haptics} from '@capacitor/haptics';

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

  constructor(public modalController: ModalController, public playService: PlayService, public alertController: AlertController) {
  }

  ngOnInit() {
    this.getQuiz();
  }


  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async answerQuestion(nr: number){
    if(this.result == null) {
      this.playService.answerQuestion(this.link, nr).subscribe(async res => {
        this.result = res;
        for (const answer of this.quiz.currentQuestion.answers) {
          if (this.result.correctAnswers.includes(answer.nr)) {
            answer.isCorrect = true;
          } else {
            answer.isCorrect = false;
          }
        }

        if (this.result.points === 0) {
          try{
            const haptics = localStorage.getItem('hapticsOn');
            if(JSON.parse(haptics)){
              await Haptics.vibrate();
            }
          } catch (e){
            console.log(e);
          }
        } else {
          this.quiz.currentPoints += this.result.points;
        }
      });
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
        this.quiz.currentQuestion.answers.push({text: question.answers[x], isCorrect: undefined, nr: x});
      }
      this.link = '/'+this.link+'/1';
    });
  }

  getQuestion(){
    this.playService.nextQuestion(this.link).subscribe((question)=>{
      this.quiz.currentQuestion= {
        text: question.text,
        answers: []
      };
      for(let x  = 1; question.answers[x] != null; x++){
        this.quiz.currentQuestion.answers.push({text: question.answers[x], isCorrect: undefined, nr: x});
      }
    });
  }

  async continue() {
    await new Promise(f => setTimeout(f, 3000));
    if(this.result != null){
      if(this.result.linkToNextQuestion != null && this.result.linkToNextQuestion !== ''){
        this.link = this.result.linkToNextQuestion;
        this.result = null;

        this.getQuestion();

      }else {
        this.endReached = true;
      }
    }
  }

  async presentAlertQuiz() {
    const alert = await this.alertController.create({
      header: 'Do you want to quit?',
      message: 'The Points you collected so far will be lost, unless you finish the Quiz',
      buttons: ['Continue', {
        text: 'Quit',
        handler: () => this.dismiss()
      }]
    });

    await alert.present();
  }

  endQuiz(){

    let totalPoints = 0;
    const points = localStorage.getItem('points');
    if(points){
      try {
        totalPoints = parseInt(points, 10);
      } catch (e) {
        console.log(e);
      }
    }

    totalPoints += this.quiz.currentPoints;
    localStorage.setItem('points', String(totalPoints));
    this.dismiss();
  }
}
